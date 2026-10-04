import { describe, expect, it } from "vitest";
import { formatJava } from "./format-java";

describe("Java formatting", () => {
  it("formats a curriculum program and is idempotent", async () => {
    const code =
      'public class Main{public static void main(String[] args){System.out.println("hello");}}';
    const formatted = await formatJava(code);
    expect(formatted).toContain("\n    public static void main");
    expect(await formatJava(formatted)).toBe(formatted);
  });
  it("preserves strings, comments and text blocks", async () => {
    const source =
      'public class Main { /* { comment } */ String s = "http://example/{x}\\\""; String t = """\n    hello { world }\n    """; }';
    const formatted = await formatJava(source);
    expect(formatted).toContain('"http://example/{x}\\\""');
    expect(formatted).toContain("/* { comment } */");
    expect(formatted).toContain("hello { world }");
  });
  it("rejects incomplete Java instead of guessing repairs", async () => {
    await expect(formatJava("public class Main {")).rejects.toThrow();
  });
});
