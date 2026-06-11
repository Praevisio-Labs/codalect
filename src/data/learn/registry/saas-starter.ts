import type { ModuleMetadata } from '@/types/index'

export const saasStarter: ModuleMetadata = {
    id: 'saas-starter',
    name: 'AI Chat Starter',
    description:
        'Build a streaming AI chat app with the Vercel AI SDK, custom personas, and a polished chat UI.',
    overview: `## Overview

You'll build a streaming AI chat application: a chat interface where users can send messages, see the AI's response stream in token by token, and switch between different AI personas that change the model's behavior. The stack is Next.js, the Vercel AI SDK, and OpenAI.

This is the foundational project for AI application development. The patterns you'll implement here — streaming responses, managing message history, system prompt injection — appear in every AI product, from simple chatbots to complex agents. Understanding them at this level of detail, rather than just dropping in a pre-built chat component, is what lets you customize and extend AI features confidently.

The persona system is what makes this project particularly instructive. Implementing it forces you to understand how system prompts work and how they shape model behavior — which is the most important lever you have when building AI products. By the time you've built three personas and seen how they change the model's responses, you'll have a much more concrete mental model of prompt engineering than any tutorial can give you.`,
    instructions: `## Your Exercise

The starter files give you the chat UI and the route handler shell. The streaming logic and persona system are left for you to implement.

**\`app/layout.tsx\`, \`app/page.tsx\`, and \`app/globals.css\`** are complete — read them to see how the chat component is wired into the route.

**\`lib/personas.ts\`** defines the persona data. It's complete — read it to understand the shape of a persona object and the system prompts that are already written.

**\`app/api/chat/route.ts\`** is the API route that the client calls. You'll need to:
1. Parse the request body to get \`messages\` and \`personaId\`.
2. Look up the persona by ID from \`lib/personas.ts\` and get its system prompt.
3. Call \`streamText\` from the Vercel AI SDK with the OpenAI model, the system prompt, and the messages.
4. Return \`result.toDataStreamResponse()\` — this is what the client-side \`useChat\` hook expects.

**\`components/Chat.tsx\`** is the client component. The \`useChat\` hook is imported but not configured. You'll need to:
1. Call \`useChat\` with \`api: '/api/chat'\` and pass the current \`personaId\` in the \`body\` option so the route handler receives it.
2. Wire the \`messages\` array to the \`<MessageList>\` component.
3. Wire the form's submit to \`handleSubmit\` and the input to \`input\` / \`handleInputChange\` from \`useChat\`.
4. Show a loading indicator when \`isLoading\` is true.

**\`components/PersonaSelect.tsx\`** is complete — it renders the persona switcher. Read it to understand how the selected persona ID is passed up to \`Chat.tsx\`.

Build in this order: get the route handler streaming first (test it with curl or a REST client), then wire up the \`useChat\` hook, then add the persona selector.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** a streaming AI chat endpoint with the Vercel AI SDK and wire it to a React client using \`useChat\` — including message history, loading state, and error handling.
- **Understand** how system prompts shape model behavior and why they're injected server-side rather than sent from the client.
- **Recognize** the data stream protocol that \`toDataStreamResponse()\` produces and why \`useChat\` on the client needs to match it — which will help you debug streaming issues and integrate other AI providers.`,
    skills: ['next', 'ai-sdk', 'open-ai'],
    domains: ['full-stack', 'ai'],
    level: 'Intermediate',
    duration: '8 hrs',
    isReleased: false,
    template: 'nextjs',
    activeFile: '/app/api/chat/route.ts',
    visibleFiles: [
        '/app/api/chat/route.ts',
        '/components/Chat.tsx',
        '/components/MessageList.tsx',
        '/components/PersonaSelect.tsx',
        '/lib/personas.ts',
        '/app/page.tsx',
        '/app/layout.tsx',
        '/app/globals.css',
    ],
}
