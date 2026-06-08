import type { ModuleMeta } from '@/types/index'

export const reactDiceGame: ModuleMeta = {
    id: 'react-dice-game',
    name: 'React Dice Game',
    description: 'Practice core React ideas by building a dice matching game.',
    overview: `## Overview

Build a small dice matching game with React. Roll ten dice, lock the values you want to keep, and keep rolling until every die shows the same face.

The game is small but exercises the everyday React loop end to end: state that drives the UI, event handlers that update that state, and a list of child components rendered from an array. It's the bridge from "I can read JSX" to "I can build something interactive."`,
    instructions: `## Your Exercise

The starter renders a working board. Your job is to make the interactions correct.

1. Implement the roll logic so locked dice keep their face and unlocked dice re-roll.
2. Toggle a die's locked state when it's clicked.
3. Detect the win condition — all dice locked and showing the same face — and swap the button label to start a new round.`,
    outcomes: `## Learning Outcomes

By the end you should be able to:

- **Implement:** drive a UI from \`useState\`, update state immutably in event handlers, and render a list with \`.map()\`.
- **Understand:** how derived values (like "did the player win?") fall out of state rather than being stored separately.
- **Recognize:** the parent-owns-state, child-receives-props pattern that scales to any React app.`,
    skills: ['react', 'js'],
    domains: ['frontend'],
    level: 'Beginner',
    duration: '2 hrs',
    isReleased: true,
    template: 'react-ts',
    activeFile: '/App.jsx',
    visibleFiles: ['/App.jsx', '/DiceTile.jsx', '/styles.css'],
}
