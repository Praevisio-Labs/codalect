import type { ModuleMeta } from '@/types/index'

export const toolCallingAgent: ModuleMeta = {
    id: 'tool-calling-agent',
    name: 'Tool-Calling Agent',
    description:
        'Build an AI agent that uses the Vercel AI SDK tool system to call real functions, validate results, and complete multi-step tasks.',
    overview: `## Overview

You'll build an AI agent that can use tools: a weather lookup, a calculator, and a web search stub. The agent decides which tools to call, calls them, incorporates the results, and continues reasoning until it has a complete answer. The interface is a Next.js chat UI backed by a streaming route handler.

Tool calling is what separates a chatbot from an agent. A chatbot generates text. An agent takes actions — it can look things up, run calculations, call APIs, and chain multiple steps together to complete a task that no single model response could handle. Understanding how tool calling works at the implementation level is essential for building anything more sophisticated than a simple Q&A interface.

This project is specifically well-suited to advanced learners because the interesting problems aren't in the UI — they're in the agent loop. How does the model decide when to call a tool vs. answer directly? What happens when a tool returns an error? How do you prevent the agent from looping indefinitely? Working through these questions with real code, rather than reading about them abstractly, builds the intuition you need to design reliable agents.`,
    instructions: `## Your Exercise

The starter files give you the chat UI and the tool definitions. The agent loop and tool execution are left for you to implement.

**\`app/layout.tsx\`, \`app/page.tsx\`, and \`app/globals.css\`** are complete — read them to see how the agent component is wired into the route.

**\`lib/tools.ts\`** defines the three tools using the Vercel AI SDK's \`tool()\` helper. The schemas are complete. You'll need to:
1. Implement the \`execute\` function for \`getWeather\` — it should return a mock weather object based on the city name (hardcode a few cities, return a default for unknown ones).
2. Implement the \`execute\` function for \`calculate\` — parse and evaluate the expression string safely. Use a simple approach: support +, -, *, / with \`Function\` or a safe eval alternative.
3. The \`searchWeb\` tool's execute is stubbed to return a placeholder — leave it as-is and note in a comment why a real implementation would need a search API key.

**\`app/api/agent/route.ts\`** is the route handler. You'll need to:
1. Call \`streamText\` with the tools from \`lib/tools.ts\` and set \`maxSteps: 5\` to allow multi-step reasoning.
2. Add a system prompt that tells the model it has access to tools and should use them when the question requires real data.
3. Return \`result.toDataStreamResponse()\`.

**\`components/AgentChat.tsx\`** is the client component. The \`useChat\` hook is configured. You'll need to:
1. Render tool call steps in the message list — when a message has \`toolInvocations\`, show which tool was called and what it returned.
2. Style tool calls differently from regular messages so the user can see the agent's reasoning process.

Build in this order: implement the tool execute functions first (test them in isolation), then the route handler, then the tool call rendering in the UI.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** a multi-step tool-calling agent with the Vercel AI SDK — including tool definitions with Zod schemas, execute functions, and the \`maxSteps\` loop that allows the model to chain tool calls.
- **Understand** the tool call lifecycle: how the model decides to call a tool, how the result is fed back into the context, and how the model uses that result to continue reasoning or produce a final answer.
- **Recognize** the failure modes of agentic systems — infinite loops, tool errors, hallucinated tool arguments — and the design patterns (max steps, input validation, error returns) that make agents more reliable.`,
    skills: ['next', 'ai-sdk', 'open-ai'],
    domains: ['ai', 'agents'],
    level: 'Advanced',
    duration: '10 hrs',
    isReleased: false,
    template: 'nextjs',
    activeFile: '/lib/tools.ts',
    visibleFiles: [
        '/lib/tools.ts',
        '/app/api/agent/route.ts',
        '/components/AgentChat.tsx',
        '/app/page.tsx',
        '/app/layout.tsx',
        '/app/globals.css',
    ],
}
