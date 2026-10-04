# JavaQuest Code Editor v2

CODE exercises use a client-only, dynamically imported `@monaco-editor/react` component. The existing Main.java / Java 21 shell, action buttons, result panel, submission service and JDK 21 execution/evaluation pipeline remain intact. Prediction questions retain their multiline answer field.

## Loading and state

`copy-monaco.mjs` copies the installed Monaco AMD assets into `public/monaco/vs` before dev/build. The loader uses our own origin; no CDN is required. Other language assets may be present on disk but are not requested by the Java editor. Generated assets are ignored by Git and ESLint. Standalone deployments must include `public`, as required by Next.js.

Monaco mounts only for CODE exercises. Its model path includes quest and exercise slugs, and the React key changes only at exercise boundaries. Drafts are keyed by the same compound identity. Code is derived synchronously from that exercise's draft or starter code, avoiding a previous exercise's code appearing during an effect. Normal rerenders preserve edits; drafts last for the current quest visit, not page reloads. Models, actions and format providers are disposed on unmount.

Run & submit and Ctrl/Cmd+Enter invoke the existing handler with the current draft. Navigation, edits and reset are disabled during submission. Reset confirms before discarding modified code and changes only the draft. Completed exercises remain editable and retain Continue.

## Shortcuts

Monaco's native keybindings remain enabled: move line (Alt+Up/Down), duplicate line (Shift+Alt+Up/Down), comment toggle (Ctrl/Cmd+/), select next occurrence (Ctrl/Cmd+D), find, replace, undo/redo, select all, clipboard operations, Alt+Click cursors, Tab indentation and Shift+Tab outdent. Platform-specific bindings and browser/OS restrictions apply; in particular macOS may reserve Cmd+H, and clipboard access may depend on browser permissions. Monaco's command palette exposes the corresponding actions.

Added Ctrl/Cmd+Enter runs/submits while the editor is focused. Shift+Alt+F invokes Format Document. No global keyboard listener intercepts browser shortcuts.

## Formatting

Prettier standalone plus `prettier-plugin-java` 2.6.7 uses the Java parser; it is loaded only for formatting. This version uses a browser-compatible JavaScript parser rather than requiring a JVM or a language server. Four-space indentation, 100-column preferred width. Formatting is an undoable Monaco edit. Parse failures preserve the entire source and report a short Hinglish message. Results are discarded if the document changes, is disposed, submission begins, or formatting is cancelled while dependencies load.

Formatting is not semantic validation or type-aware IntelliSense. Invalid/incomplete source and unsupported Java syntax cannot be formatted. Compiler feedback still comes from the existing backend after submission. No regular-expression rewriting of strings/comments is used.

## Accessibility and layout

Accessible editor label, visible amber focus ring, secondary reset button, default Monaco screen-reader/keyboard behavior. Minimap disabled, four-space tabs, horizontal scrolling rather than wrapping source. Automatic layout and a bounded responsive height keep the editor inside the existing mobile layout. Loading failure falls back to a plain editable field so the current draft can still be submitted.

## Validation

Frontend tests cover formatting, strings/comments/text blocks, invalid source, stale formatting, current shortcut handler/busy guard, provider cleanup, draft isolation/navigation/rerenders, reset confirmation, existing submission payload and compiler error display. Existing prediction tests continue to pass.

Browser verification was attempted but the environment has no installed Chromium and its browser download returned invalid archives. Consequently real Monaco shortcut behavior, screenshots, mobile keyboard behavior and live API/JDK end-to-end runs were not verified here. Native Monaco behaviors were reviewed against its configuration; API evaluation code was not modified.

Repository lint/typecheck/build passed (17 pre-existing backend lint warnings). All 11 frontend tests passed. Full repository tests ran: 9 backend unit tests passed, while 8 backend suites could not initialize because DATABASE_URL was missing. Frozen lockfile validation passed with the repository-pinned pnpm 10.0.0.
