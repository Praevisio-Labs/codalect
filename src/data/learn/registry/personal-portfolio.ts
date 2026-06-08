import type { ModuleMeta } from '@/types/index'

export const personalPortfolio: ModuleMeta = {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Site',
    description:
        'Design and build a personal portfolio with Next.js — project showcase, about section, and a clean, typed component structure.',
    overview: `## Overview

You'll build a personal portfolio site: a home page with a hero section and project showcase, an about page, and a consistent layout with navigation. The stack is Next.js with TypeScript and Tailwind. The content is yours to fill in — the starter files use placeholder data that you'll replace.

A portfolio is the most personal project you can build, which makes it a surprisingly good learning exercise. Because you care about how it looks and what it says about you, you'll push further on the design and polish than you would on a generic exercise. That extra effort is where a lot of the learning happens.

What makes this project specifically instructive is the component architecture. A portfolio is small enough that you could build it as a single file, but doing that would teach you nothing. The starter files are structured to force you to think about component boundaries: what belongs in a layout, what belongs in a page, what belongs in a reusable component. Getting that structure right is the skill that scales to large applications.`,
    instructions: `## Your Exercise

The starter files give you the layout, the data types, and the page shells. The component implementations and your personal content are left for you to fill in.

**\`lib/data.ts\`** contains your portfolio data — projects, skills, and personal info. It's pre-filled with placeholder content. Replace it with your own information before building the UI. The types are defined here too — read them before touching any component.

**\`app/layout.tsx\`** is complete — it renders the \`<Nav>\` component and wraps all pages. Read it to understand the layout structure.

**\`components/Nav.tsx\`** has the markup but no active link highlighting. You'll need to:
1. Use \`usePathname()\` from \`next/navigation\` to get the current path.
2. Apply an active style to the nav link that matches the current path.

**\`app/page.tsx\`** is the home page. The hero section is in place. You'll need to:
1. Import the \`projects\` array from \`lib/data.ts\` and render a \`<ProjectCard>\` for each one.
2. Implement \`<ProjectCard>\` in \`components/ProjectCard.tsx\` — it should show the project name, description, tech stack tags, and a link.

**\`app/about/page.tsx\`** is the about page shell. You'll need to:
1. Render your bio, skills list, and any other sections you want.
2. The skills data is in \`lib/data.ts\` — import and render it.

Build in this order: fill in your data first (so you have real content to work with), then \`Nav\`, then \`ProjectCard\`, then the about page.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** a multi-page Next.js site with a shared layout, typed data layer, and reusable components — and make deliberate decisions about what belongs in each layer.
- **Understand** the Next.js App Router file conventions: how \`layout.tsx\` wraps pages, how \`page.tsx\` maps to a route, and how \`usePathname\` gives client components access to the current route.
- **Recognize** the component decomposition pattern — separating data, layout, and presentation — and apply it to larger projects where the same discipline prevents the codebase from becoming a tangle of one-off components.`,
    skills: ['next', 'tailwind', 'typescript'],
    domains: ['frontend'],
    level: 'Beginner',
    duration: '6 hrs',
    isReleased: true,
    template: 'react-ts',
    activeFile: '/lib/data.ts',
    visibleFiles: [
        '/lib/data.ts',
        '/components/Nav.tsx',
        '/components/ProjectCard.tsx',
        '/app/page.tsx',
        '/app/about/page.tsx',
        '/styles.css',
    ],
}
