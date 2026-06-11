import { type UIMessage } from 'ai'

export const defaultMessage = [
    {
        id: 'init',
        role: 'assistant',
        parts: [
            {
                type: 'text',
                text: "Hi! I'm Codalect, how can I help?",
            },
        ],
    },
] as UIMessage[]
