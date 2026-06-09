import type { ModuleMetadata } from '@/types/index'

export const animationPlayground: ModuleMetadata = {
    id: 'animation-playground',
    name: 'Animation Playground',
    description:
        'Explore motion principles by building interactive UI experiments with transitions, gestures, and staged reveals.',
    overview: `## Overview

You'll build three self-contained animation experiments on a single page: a staggered list reveal, a draggable card with physics, and a modal with an enter/exit transition. Each experiment is small enough to finish in an hour, but each one teaches a distinct concept in Framer Motion.

Animation is one of those skills that's easy to cargo-cult — copy a snippet, tweak the numbers, move on. This project is designed to break that habit. By building each experiment from a partial scaffold, you'll have to reason about *why* the animation works, not just *that* it works. The stagger experiment forces you to understand variants and parent-child propagation. The drag experiment forces you to understand motion values. The modal experiment forces you to understand \`AnimatePresence\` and exit animations.

The project is well-suited to beginners because the feedback loop is immediate and visual — you can see exactly what your code is doing, which makes it much easier to build intuition than in a purely logical domain.`,
    instructions: `## Your Exercise

The starter files give you the page layout and the three experiment shells. Each experiment has its structure in place but the animation props are missing or incomplete.

**\`StaggerList.tsx\`** renders a list of items that should animate in one by one when the component mounts. The \`motion.ul\` and \`motion.li\` elements are in place. You'll need to:
1. Define \`containerVariants\` with \`hidden\` and \`visible\` states. The \`visible\` state should include a \`staggerChildren\` transition.
2. Define \`itemVariants\` with \`hidden\` (opacity 0, shifted down) and \`visible\` (opacity 1, in place) states.
3. Apply the variants to the \`motion.ul\` and \`motion.li\` elements with \`initial\` and \`animate\` props.

**\`DraggableCard.tsx\`** renders a card the user can drag. The \`motion.div\` is in place. You'll need to:
1. Add the \`drag\` prop and \`dragConstraints\` to limit how far the card can be dragged.
2. Add \`whileDrag\` to scale the card up slightly while it's being dragged.
3. Use \`useMotionValue\` and \`useTransform\` to rotate the card based on its horizontal position — cards should tilt in the direction they're dragged.

**\`TransitionModal.tsx\`** renders a button that opens a modal. The open/close state is already wired. You'll need to:
1. Wrap the conditional modal render in \`AnimatePresence\`.
2. Add \`initial\`, \`animate\`, and \`exit\` props to the overlay and the panel — they should animate independently (overlay fades, panel scales and fades).
3. Make sure the \`key\` prop is set correctly on the animated element inside \`AnimatePresence\`.

Build in this order: \`StaggerList\` first (introduces variants), then \`DraggableCard\` (introduces motion values), then \`TransitionModal\` (introduces \`AnimatePresence\`).`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** the three core Framer Motion patterns — variant-based orchestration, gesture-driven motion values, and \`AnimatePresence\` exit animations — from a partial scaffold without copying from documentation.
- **Understand** why Framer Motion's abstractions exist: what problem variants solve over inline animation props, why \`AnimatePresence\` is necessary for exit animations, and why motion values bypass React re-renders.
- **Recognize** these same patterns in production UIs — the stagger on a search results list, the spring on a drag-to-dismiss card, the fade on a toast notification — and know how to replicate them.`,
    skills: ['react', 'framer-motion'],
    domains: ['frontend'],
    level: 'Beginner',
    duration: '6 hrs',
    isReleased: true,
    template: 'react-ts',
    activeFile: '/App.tsx',
    visibleFiles: [
        '/App.tsx',
        '/components/StaggerList.tsx',
        '/components/DraggableCard.tsx',
        '/components/TransitionModal.tsx',
    ],
}
