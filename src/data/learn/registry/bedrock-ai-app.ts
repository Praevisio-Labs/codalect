import type { ModuleMetadata } from '@/types/index'

export const bedrockAiApp: ModuleMetadata = {
    id: 'bedrock-ai-app',
    name: 'Bedrock AI App',
    description:
        'Build a Next.js app backed by AWS Bedrock — integrate Claude via the Bedrock API, manage IAM credentials, and stream responses.',
    overview: `## Overview

You'll build a Next.js application that calls Claude through AWS Bedrock instead of the Anthropic API directly. The app streams responses to the client using the Vercel AI SDK's Bedrock provider, and you'll configure the IAM credentials and region settings needed to authenticate with AWS.

Bedrock is how enterprises use foundation models — it keeps data inside AWS, enables VPC isolation, and integrates with IAM for access control. If you're building AI features for a company that's already on AWS, Bedrock is often the required path. Understanding how it differs from calling OpenAI or Anthropic directly — and specifically how AWS credential management works — is a practical skill that most AI tutorials skip entirely.

What makes this project specifically instructive is the credential layer. AWS authentication is more complex than an API key: you need to understand IAM roles, access keys, and how the AWS SDK resolves credentials from the environment. Working through that setup, and understanding why it's designed the way it is, gives you a foundation for working with any AWS service — not just Bedrock.`,
    instructions: `## Your Exercise

The starter files give you the chat UI and the route handler shell. The Bedrock integration and credential setup are left for you to implement.

**\`app/layout.tsx\`, \`app/page.tsx\`, and \`app/globals.css\`** are complete — read them to see how the app is structured.

**\`lib/bedrock.ts\`** initializes the Bedrock provider. You'll need to:
1. Import \`createAmazonBedrock\` from \`@ai-sdk/amazon-bedrock\`.
2. Configure it with your AWS region and credentials from environment variables (\`AWS_REGION\`, \`AWS_ACCESS_KEY_ID\`, \`AWS_SECRET_ACCESS_KEY\`).
3. Export a \`bedrock\` instance and a \`CLAUDE_MODEL_ID\` constant for the model you want to use (e.g. \`anthropic.claude-3-5-sonnet-20241022-v2:0\`).

**\`app/api/chat/route.ts\`** is the streaming route handler. You'll need to:
1. Parse the request body for \`messages\`.
2. Call \`streamText\` with the Bedrock model from \`lib/bedrock.ts\`.
3. Add error handling — Bedrock returns specific error types for credential failures, throttling, and model access issues. Catch them and return appropriate HTTP status codes.
4. Return \`result.toDataStreamResponse()\`.

**\`components/Chat.tsx\`** is mostly complete — the \`useChat\` hook is wired. You'll need to:
1. Add a model selector that lets the user switch between two Bedrock-hosted models (Claude Sonnet and Claude Haiku, for example).
2. Pass the selected model ID in the \`body\` option of \`useChat\` so the route handler can use it.

**\`.env.local\`** (not in the starter files — you create this) needs:
\`\`\`
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
\`\`\`

Build in this order: set up credentials and test the route handler with curl first, then wire the UI.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** a streaming AI chat endpoint backed by AWS Bedrock using the Vercel AI SDK — including credential configuration, model selection, and error handling for AWS-specific failure modes.
- **Understand** how AWS IAM credential resolution works (environment variables → shared credentials file → instance role) and why Bedrock requires different setup than API-key-based providers.
- **Recognize** the Bedrock model ID format and how to find available models in the AWS console — and apply the same Vercel AI SDK patterns to switch between Bedrock, OpenAI, and Anthropic providers with minimal code changes.`,
    skills: ['next', 'bedrock', 'ai-sdk'],
    domains: ['ai', 'full-stack'],
    level: 'Advanced',
    duration: '10 hrs',
    isReleased: false,
    template: 'nextjs',
    activeFile: '/lib/bedrock.ts',
    visibleFiles: [
        '/lib/bedrock.ts',
        '/app/api/chat/route.ts',
        '/components/Chat.tsx',
        '/app/page.tsx',
        '/app/layout.tsx',
        '/app/globals.css',
    ],
}
