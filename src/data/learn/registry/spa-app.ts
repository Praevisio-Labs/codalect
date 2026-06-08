import type { ModuleMeta } from '@/types/index'

export const spaApp: ModuleMeta = {
    id: 'spa-app',
    name: 'Simple SPA App',
    description: 'Build a mini todo list with HTML, JavaScript, and CSS.',
    overview: `## Overview

You'll build a working todo list app from scratch using vanilla HTML, CSS, and JavaScript — no frameworks, no build step, no libraries. The result is a single-page app where users can add tasks, mark them complete, and remove them.

This is the foundation project for web development. Every modern framework — React, Vue, Svelte — is built on top of the same primitives you'll use here: the DOM, event listeners, and CSS selectors. Understanding what the browser actually does before you reach for a framework is what separates someone who *uses* React from someone who *understands* what React is solving.`,
    instructions: `## Your Exercise

The starter files give you a working scaffold with deliberate gaps to fill in.

**\`index.html\`** is complete — it defines the page structure (form, input, list) and links the stylesheet and script. Read it first to understand the IDs and class names the JavaScript and CSS will hook into.

**\`app.js\`** is partially wired. Form submission, render loop, and toggle/remove logic are in place, but the \`addTodo\` function is empty and the remove button has no click handler. You'll need to:
1. Implement \`addTodo(text)\` so it pushes a new todo object onto the \`todos\` array. Each todo needs a unique \`id\`, the \`text\`, and a \`completed\` boolean (default false).
2. Wire the remove button inside \`render()\` so clicking it calls \`removeTodo(todo.id)\`.

**\`styles.css\`** styles the form, list, and individual todos, but the \`.todo--completed\` rule is empty. Add styles that visually de-emphasize completed todos — strikethrough text and reduced opacity work well, but the design choice is yours.

Build in this order: HTML first (already done — just read it), then JavaScript (so the app actually works), then CSS (polish the completed state). Open the page in a browser tab and refresh as you go — there's no build step, just save and reload.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement:** wire DOM events to JavaScript handlers without a framework, mutate application state in response to user input, and re-render a list from that state.
- **Understand:** why frameworks exist — the manual \`render()\` loop you wrote here is what React's reconciler automates, and the \`todos\` array is what \`useState\` wraps.
- **Recognize:** the same three-part pattern (markup structure, style rules, behavior wiring) in every web app you encounter, from a marketing landing page to a full SPA.`,
    skills: ['html-5', 'js', 'css-3'],
    domains: ['frontend'],
    level: 'Beginner',
    duration: '2.5 hrs',
    isReleased: true,
    template: 'static',
    activeFile: '/app.js',
    visibleFiles: ['/index.html', '/app.js', '/styles.css'],
}
