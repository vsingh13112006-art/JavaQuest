import { EventEmitter } from "node:events";
import { PassThrough } from "node:stream";
import { afterEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ spawn: vi.fn() }));
vi.mock("node:child_process", () => ({ spawn: mocks.spawn }));
import { checkDirectJava } from "./directJavaRunner.js";

function processFixture() {
  return Object.assign(new EventEmitter(), {
    pid: 123456,
    stdin: new PassThrough(),
    stdout: new PassThrough(),
    stderr: new PassThrough(),
    kill: vi.fn(() => true),
  });
}

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  mocks.spawn.mockReset();
});

describe("direct runner exit/close lifecycle", () => {
  it("does not turn successful exit into timeout while stdio close is delayed", async () => {
    vi.useFakeTimers();
    vi.spyOn(process, "kill").mockImplementation(() => true);
    const children: ReturnType<typeof processFixture>[] = [];
    mocks.spawn.mockImplementation(() => {
      const child = processFixture();
      children.push(child);
      return child;
    });
    const ready = checkDirectJava();
    const javac = children[0]!;
    javac.stdout.write("javac 21\n");
    javac.emit("exit", 0, null);
    // The leader has completed before the deadline. Node's close can arrive later.
    await vi.advanceTimersByTimeAsync(3100);
    javac.emit("close", 0, null);
    await Promise.resolve();
    expect(children).toHaveLength(2);
    children[1]!.stderr.write("java version 21\n");
    children[1]!.emit("exit", 0, null);
    children[1]!.emit("close", 0, null);
    expect(await ready).toBe(true);
  });

  it("cleans the group at leader exit without attempting to kill a reaped child", async () => {
    const kill = vi.spyOn(process, "kill").mockImplementation(() => {
      throw Object.assign(new Error("group already gone"), { code: "ESRCH" });
    });
    const children: ReturnType<typeof processFixture>[] = [];
    mocks.spawn.mockImplementation(() => {
      const child = processFixture();
      children.push(child);
      queueMicrotask(() => {
        child.emit("exit", 0, null);
        child.emit("close", 0, null);
      });
      return child;
    });
    expect(await checkDirectJava()).toBe(true);
    expect(kill).toHaveBeenCalledWith(-123456, "SIGKILL");
    for (const child of children) expect(child.kill).not.toHaveBeenCalled();
  });
});
