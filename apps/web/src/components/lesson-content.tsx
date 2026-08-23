import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function LessonContent({ content }: { content: string }) {
  return (
    <div className="max-w-3xl text-slate-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mb-4 mt-10 text-2xl font-black text-white">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-xl font-bold text-white">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="my-5 text-base leading-8 text-slate-300">
              {children}
            </p>
          ),

          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),

          ul: ({ children }) => (
            <ul className="my-5 space-y-3 pl-6">{children}</ul>
          ),

          li: ({ children }) => (
            <li className="list-disc leading-7 text-slate-300">
              {children}
            </li>
          ),

          blockquote: ({ children }) => (
            <div className="my-7 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-5 py-1">
              {children}
            </div>
          ),

          code: ({ className, children, ...props }) => {
            const block = className?.includes("language-");

            if (!block) {
              return (
                <code
                  className="rounded bg-slate-950 px-1.5 py-1 font-mono text-sm text-amber-300"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code
                className="font-mono text-sm leading-7 text-slate-100"
                {...props}
              >
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <div className="my-7 overflow-hidden rounded-2xl border border-slate-700 bg-[#050914]">
              <div className="border-b border-slate-800 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Java
              </div>

              <pre className="overflow-x-auto p-5">{children}</pre>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}