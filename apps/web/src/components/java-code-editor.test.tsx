import { cleanup, render, act } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import JavaCodeEditor from "./java-code-editor";

const mock = vi.hoisted(() => ({
  props: {} as Record<string, unknown>,
  config: vi.fn(),
  format: vi.fn(),
}));
vi.mock("@monaco-editor/react", () => ({
  loader: { config: mock.config },
  default: (props: Record<string, unknown>) => {
    mock.props = props;
    return <div />;
  },
}));
vi.mock("@/lib/format-java", () => ({ formatJava: mock.format }));
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

function mount() {
  const dispose = vi.fn();
  const addAction = vi.fn((_action: { run: () => void }) => {
    void _action;
    return { dispose };
  });
  const provider = vi.fn(
    (
      _language: string,
      _provider: {
        provideDocumentFormattingEdits: (
          model: unknown,
          options: unknown,
          token: unknown,
        ) => Promise<unknown[]>;
      },
    ) => {
      void _language;
      void _provider;
      return { dispose };
    },
  );
  const instance = { addAction, getValue: () => "class Main {}" };
  const monaco = {
    editor: { defineTheme: vi.fn(), setTheme: vi.fn() },
    KeyMod: { CtrlCmd: 2048 },
    KeyCode: { Enter: 3 },
    languages: { registerDocumentFormattingEditProvider: provider },
  };
  act(() =>
    (mock.props.onMount as (editor: unknown, monaco: unknown) => void)(
      instance,
      monaco,
    ),
  );
  return { addAction, provider, dispose };
}

describe("Java editor integration", () => {
  it("uses current run handler without recreating the editor and blocks busy runs", () => {
    const first = vi.fn(),
      next = vi.fn();
    const { rerender, unmount } = render(
      <JavaCodeEditor
        identity="q/e"
        code="class Main {}"
        onChange={vi.fn()}
        busy={false}
        onRun={first}
      />,
    );
    const { addAction, dispose } = mount();
    const run = addAction.mock.calls[0]![0].run;
    run();
    expect(first).toHaveBeenCalledOnce();
    rerender(
      <JavaCodeEditor
        identity="q/e"
        code="class Main {}"
        onChange={vi.fn()}
        busy={false}
        onRun={next}
      />,
    );
    run();
    expect(next).toHaveBeenCalledOnce();
    expect(addAction).toHaveBeenCalledOnce();
    rerender(
      <JavaCodeEditor
        identity="q/e"
        code="class Main {}"
        onChange={vi.fn()}
        busy
        onRun={next}
      />,
    );
    run();
    expect(next).toHaveBeenCalledOnce();
    unmount();
    expect(dispose).toHaveBeenCalledTimes(2);
  });
  it("discards formatting if the learner edits while the formatter loads", async () => {
    render(
      <JavaCodeEditor
        identity="q/e"
        code="class Main {}"
        onChange={vi.fn()}
        busy={false}
        onRun={vi.fn()}
      />,
    );
    const { provider } = mount();
    let version = 1;
    const model = {
      getVersionId: () => version,
      getValue: () => "class Main {}",
      isDisposed: () => false,
      getFullModelRange: vi.fn(),
    };
    mock.format.mockImplementation(async () => {
      version++;
      return "formatted";
    });
    let edits;
    await act(async () => {
      edits = await provider.mock.calls[0]![1].provideDocumentFormattingEdits(
        model,
        {},
        { isCancellationRequested: false },
      );
    });
    expect(edits).toEqual([]);
  });
});
