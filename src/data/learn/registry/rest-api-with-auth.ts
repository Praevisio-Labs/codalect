import type { ModuleMeta } from '@/types/index'

export const restApiWithAuth: ModuleMeta = {
    id: 'rest-api-with-auth',
    name: 'Full-Stack Auth App',
    description:
        'Build a Next.js app with Supabase authentication, protected routes, and user profile management.',
    overview: `## Overview

You'll build a Next.js application with a complete authentication flow: sign up, sign in, sign out, protected routes that redirect unauthenticated users, and a profile page where users can update their display name. Supabase handles the auth backend — you're building the UI and the route protection logic.

Authentication is one of those features that every app needs and that most developers get wrong the first time. The common mistakes — storing tokens in localStorage, protecting routes only on the client, not handling session expiry — all come from not understanding how auth state flows through a full-stack app. This project forces you to confront that flow directly.

What makes this project specifically instructive is the middleware. Next.js middleware runs on the edge before any page renders, which is the right place to check auth state and redirect. Understanding why middleware is the correct layer for route protection — rather than a client-side check in the component — is one of the most transferable things you'll learn here.`,
    instructions: `## Your Exercise

The starter files give you the page layouts and the Supabase client setup. The auth logic and route protection are left for you to implement.

**\`app/layout.tsx\`, \`app/page.tsx\` (dashboard), and \`app/globals.css\`** are complete — read them to see how the app is structured.

**\`app/login/page.tsx\` and \`app/signup/page.tsx\`** have the form UI in place. You'll implement the submit handlers for each.

**\`middleware.ts\`** is the most important file. It runs on every request before the page renders. You'll need to:
1. Call \`supabase.auth.getUser()\` to check if the current request has a valid session.
2. If the user is not authenticated and the path is not \`/login\` or \`/signup\`, redirect to \`/login\`.
3. If the user is authenticated and the path is \`/login\` or \`/signup\`, redirect to \`/\` (the dashboard).

Build in this order: middleware first (so you can test redirects), then login, then signup.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** a complete Supabase auth flow in Next.js — sign up, sign in, sign out, session refresh, and protected routes — using the correct client for each context (server vs. client component).
- **Understand** why route protection belongs in middleware rather than in client components, and what the difference is between a Supabase server client and a browser client.
- **Recognize** the session cookie pattern that Supabase uses and why it's more secure than storing tokens in localStorage — and apply the same reasoning to other auth providers.`,
    skills: ['next', 'supabase', 'typescript'],
    domains: ['full-stack', 'security'],
    level: 'Intermediate',
    duration: '10 hrs',
    isReleased: false,
    template: 'nextjs',
    activeFile: '/middleware.ts',
    visibleFiles: [
        '/middleware.ts',
        '/app/page.tsx',
        '/app/login/page.tsx',
        '/app/signup/page.tsx',
        '/app/layout.tsx',
        '/app/globals.css',
    ],
}
