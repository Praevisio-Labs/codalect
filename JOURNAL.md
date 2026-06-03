# Dev Journal

*Decisions, notes, and excerpted takeaways.*

## Monaco Editor

**monaco-editor** — the core editor that powers VS Code. Direct API docs for configuration, language support, and editor instances.
- [npm](https://www.npmjs.com/package/monaco-editor)
- [docs](https://microsoft.github.io/monaco-editor/docs.html)

**@monaco-editor/react** — React wrapper around Monaco. Use this for component-level integration; refer to the core docs above for editor API details.
- [npm](https://www.npmjs.com/package/@monaco-editor/react)
- [github](https://github.com/suren-atoyan/monaco-react#readme)

---

## Vercel AI SDK

Handles streaming, provider switching, and the `useChat` hook. The foundations doc covers how streaming works under the hood; the Next.js App Router guide covers the API route + client hook setup used in this project.
- [streaming foundations](https://ai-sdk.dev/docs/foundations/streaming)
- [Next.js App Router quickstart](https://ai-sdk.dev/docs/getting-started/nextjs-app-router)

---

## Sandpack

Halfway through the project, we realized that a simple iframe would not be enough to support modern frameworks like React or TS. That's why we decided to rebuild the IDE around Sandpack's Preview, VFS, and console components.

By default, Sandpack's [Editor component](https://sandpack.codesandbox.io/docs/advanced-usage/components#code-editor) is a wrapper around [`codemirror`](https://github.com/codemirror/dev). It supports extensions like `autocomplete` but we opted to keep Monaco because CodeMirror is too lightweight for our use-case (i.e. no IntelliSense).

Luckily, Sandpack has documented patterns for [integrating Monaco Editor](https://sandpack.codesandbox.io/docs/guides/integrate-monaco-editor). 

The main changes that we needed to make were to add the [Preview component](https://sandpack.codesandbox.io/docs/advanced-usage/components#preview), the [Console component](https://sandpack.codesandbox.io/docs/advanced-usage/components#console), as well as to rebuild the app's existing file tree around Sandpack's
- [FileTree component](https://sandpack.codesandbox.io/docs/advanced-usage/components#file-explorer).
