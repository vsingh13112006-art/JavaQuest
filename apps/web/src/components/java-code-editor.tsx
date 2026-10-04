"use client";

import Editor, { loader, type OnMount } from "@monaco-editor/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { editor, IDisposable } from "monaco-editor";
import { formatJava } from "@/lib/format-java";

// Serve the pinned npm version from our own origin, including its worker.
loader.config({ paths: { vs: "/monaco/vs" } });

export default function JavaCodeEditor({
  identity,
  code,
  onChange,
  busy,
  onRun,
}: {
  identity: string;
  code: string;
  onChange: (code: string) => void;
  busy: boolean;
  onRun: () => void;
}) {
  const latest = useRef({ busy, onRun });
  latest.current = { busy, onRun };
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const disposables = useRef<IDisposable[]>([]);
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (!editorRef.current) setFailed(true);
    }, 20000);
    return () => {
      window.clearTimeout(timeout);
      disposables.current.forEach((d) => d.dispose());
    };
  }, []);

  const mount: OnMount = useCallback((instance, monaco) => {
    editorRef.current = instance;
    setFailed(false);
    monaco.editor.defineTheme("javaquest", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "keyword", foreground: "FBBF24" },
        { token: "string", foreground: "86EFAC" },
        { token: "comment", foreground: "94A3B8" },
        { token: "number", foreground: "C4B5FD" },
      ],
      colors: {
        "editor.background": "#050914",
        "editor.foreground": "#E2E8F0",
        "editorLineNumber.foreground": "#64748B",
        "editorLineNumber.activeForeground": "#FBBF24",
        "editor.lineHighlightBackground": "#101827",
        "editorCursor.foreground": "#FBBF24",
        "editor.selectionBackground": "#334155",
        focusBorder: "#FBBF24",
      },
    });
    monaco.editor.setTheme("javaquest");
    disposables.current.push(
      instance.addAction({
        id: "javaquest.run",
        label: "Run & submit",
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
        run: () => {
          if (!latest.current.busy && instance.getValue().trim())
            latest.current.onRun();
        },
      }),
    );
    disposables.current.push(
      monaco.languages.registerDocumentFormattingEditProvider("java", {
        async provideDocumentFormattingEdits(model, _options, token) {
          const version = model.getVersionId();
          if (latest.current.busy) return [];
          try {
            const text = await formatJava(model.getValue());
            if (
              token.isCancellationRequested ||
              model.isDisposed() ||
              model.getVersionId() !== version ||
              latest.current.busy
            )
              return [];
            setMessage("");
            return [{ range: model.getFullModelRange(), text }];
          } catch {
            setMessage(
              "Format nahi hua: pehle Java syntax check karo. Code unchanged hai.",
            );
            return [];
          }
        },
      }),
    );
  }, []);

  return (
    <div
      id="code-editor"
      className="min-w-0 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400/60"
    >
      {failed ? (
        <div role="alert" className="p-5 text-sm text-amber-200">
          Editor load nahi hua. Page reload karke dobara try karo.
          <textarea
            aria-label="Java source code (fallback)"
            value={code}
            disabled={busy}
            onChange={(e) => onChange(e.target.value)}
            className="mt-3 min-h-80 w-full bg-transparent font-mono text-slate-100"
          />
        </div>
      ) : (
        <Editor
          height="clamp(240px, 55dvh, 440px)"
          language="java"
          theme="javaquest"
          path={`javaquest://${encodeURIComponent(identity)}/Main.java`}
          value={code}
          onChange={(value) => onChange(value ?? "")}
          onMount={mount}
          loading={
            <p role="status" className="p-5 text-sm text-slate-400">
              Java editor load ho raha hai…
            </p>
          }
          options={{
            ariaLabel: "Java source code",
            readOnly: busy,
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            lineHeight: 24,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            lineNumbers: "on",
            renderLineHighlight: "all",
            matchBrackets: "always",
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            autoIndent: "full",
            tabSize: 4,
            insertSpaces: true,
            detectIndentation: false,
            selectionHighlight: true,
            smoothScrolling: true,
            wordWrap: "off",
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
            scrollbar: { horizontal: "auto" },
            multiCursorModifier: "alt",
            accessibilitySupport: "auto",
            fixedOverflowWidgets: true,
          }}
        />
      )}
      {message && (
        <p role="status" className="px-5 py-2 text-xs text-amber-200">
          {message}
        </p>
      )}
    </div>
  );
}
