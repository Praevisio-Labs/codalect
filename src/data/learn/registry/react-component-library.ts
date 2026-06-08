import type { ModuleMeta } from '@/types/index'

export const reactComponentLibrary: ModuleMeta = {
    id: 'react-component-library',
    name: 'TypeScript UI Kit',
    description:
        'Build a set of typed, reusable React components — buttons, inputs, modals — with consistent props and Tailwind styling.',
    overview: `## Overview

You'll build a small but production-quality UI kit: a \`Button\`, a controlled \`TextInput\`, and a \`Modal\` — three components that appear in virtually every web app and that expose the full range of component design decisions.

The goal isn't to build a lot of components. It's to build three components well enough that you understand the decisions behind every component library you'll ever use: how props are typed, how variants are expressed, how accessibility is handled, and how a component stays flexible without becoming a configuration nightmare.

This project is specifically well-suited to learning because the components are small enough to hold in your head completely, but rich enough to surface real tradeoffs. A \`Button\` with variants, sizes, loading state, and an icon slot is a surprisingly deep exercise. By the time you've built all three, you'll read third-party component library source code with recognition instead of confusion.`,
    instructions: `## Your Exercise

The starter files give you the component shells and a demo page to render them in.

**\`Button.tsx\`** has the prop type defined and the base JSX structure in place. The \`variant\` and \`size\` props are declared but not wired to any classes. You'll need to:
1. Implement the \`variantClasses\` and \`sizeClasses\` lookup maps and apply them to the button's \`className\`.
2. Add a \`loading\` prop — when true, show a spinner (a simple animated \`<span>\` is fine) and disable the button.
3. Add an \`icon\` prop (\`React.ReactNode\`) that renders to the left of the label when provided.

**\`TextInput.tsx\`** is a controlled input wrapper. The \`value\` and \`onChange\` wiring is done. You'll need to:
1. Add \`label\`, \`error\`, and \`hint\` props and render them in the right positions around the \`<input>\`.
2. Wire the \`error\` prop to change the input's border color and render the error message below.
3. Make sure the \`<label>\` and \`<input>\` are properly associated (matching \`htmlFor\` / \`id\`).

**\`Modal.tsx\`** has the overlay and panel structure but no open/close behavior. You'll need to:
1. Accept an \`isOpen\` prop and conditionally render the modal.
2. Close the modal when the overlay (not the panel) is clicked — think about how to stop the click from propagating.
3. Close the modal when the Escape key is pressed — this requires a \`useEffect\` with a keyboard event listener.

**\`page.tsx\`** is the demo page. It imports all three components and renders them with various prop combinations so you can see them working. Read it first — it tells you exactly what props each component needs to support.

Build in this order: \`Button\` first (simplest), then \`TextInput\`, then \`Modal\`. After each component, check the demo page to confirm it renders correctly before moving on.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** typed React components with variant props, controlled inputs, and portal-based overlays — the three patterns that cover the majority of UI kit components.
- **Understand** why component libraries make the design decisions they do: prop naming conventions, the separation of visual variants from semantic meaning, and why accessibility attributes aren't optional.
- **Recognize** the same patterns in third-party libraries like shadcn/ui, Radix, and Headless UI — and read their source code with enough context to extend or debug them.`,
    skills: ['react', 'typescript', 'tailwind'],
    domains: ['frontend'],
    level: 'Intermediate',
    duration: '8 hrs',
    isReleased: true,
    template: 'react-ts',
    activeFile: '/App.tsx',
    visibleFiles: [
        '/App.tsx',
        '/components/Button.tsx',
        '/components/TextInput.tsx',
        '/components/Modal.tsx',
        '/lib/cn.ts',
    ],
}
