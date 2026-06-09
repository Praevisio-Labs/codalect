import type { ModuleMetadata } from '@/types/index'

export const nextjsDiceGame: ModuleMetadata = {
    id: 'nextjs-dice-game',
    name: 'Next.js Dice Game',
    description:
        'Rebuild the dice game as a TypeScript Next.js App Router app.',
    overview: `## Overview

The same dice matching game, this time as a Next.js App Router app in TypeScript. You'll see how the client-side React you already know slots into Next's server/client component model — \`layout.tsx\` and \`page.tsx\` are server components, and the interactive game lives in a \`"use client"\` component.`,
    instructions: `## Your Exercise

The app boots to a working board. Make the interactions correct, exactly as in the React version:

1. Roll logic — locked dice hold, unlocked dice re-roll.
2. Toggle a die's locked state on click.
3. Detect the win and switch the button to start a new round.`,
    outcomes: `## Learning Outcomes

By the end you should be able to:

- **Implement:** the same stateful game logic inside a Next.js client component.
- **Understand:** where the server/client boundary falls in the App Router, and why interactive state needs \`"use client"\`.
- **Recognize:** how a plain React component ports into a Next.js project with minimal change.`,
    skills: ['react', 'nextjs', 'typescript'],
    domains: ['frontend'],
    level: 'Intermediate',
    duration: '2 hrs',
    isReleased: false,
    template: 'nextjs',
    activeFile: '/app/page.tsx',
    visibleFiles: [
        '/app/page.tsx',
        '/app/layout.tsx',
        '/app/globals.css',
        '/components/DiceGame.tsx',
        '/components/DiceTile.tsx',
    ],
}
