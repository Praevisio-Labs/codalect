'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport, type UIMessage } from 'ai'
import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'

function getTextParts(message: UIMessage) {
    return message.parts.filter((part) => part.type === 'text')
}

function getToolParts(message: UIMessage) {
    return message.parts.filter(
        (part) => part.type === 'dynamic-tool' || part.type.startsWith('tool-'),
    )
}

function getToolName(part: UIMessage['parts'][number]) {
    if ('toolName' in part && typeof part.toolName === 'string') {
        return part.toolName
    }

    return part.type.replace(/^tool-/, '')
}

export function AgentChat() {
    const [input, setInput] = useState('')
    const transport = useMemo(
        () => new DefaultChatTransport({ api: '/api/agent' }),
        [],
    )
    const { messages, sendMessage, status, error } = useChat({ transport })
    const isLoading = status === 'submitted' || status === 'streaming'

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const text = input.trim()
        if (!text || isLoading) return

        void sendMessage({ text })
        setInput('')
    }

    return (
        <div className="flex h-screen flex-col">
            <header className="border-b bg-white px-4 py-3">
                <h1 className="font-semibold">Tool-Calling Agent</h1>
                <p className="text-xs text-gray-500">
                    Try: "What's the weather in Tokyo?" or "What is 15% of 847?"
                </p>
            </header>

            <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="mx-auto max-w-2xl space-y-4">
                    {messages.map((m) => (
                        <div key={m.id}>
                            {getTextParts(m).map((part, index) => (
                                <div
                                    key={`${m.id}-text-${index}`}
                                    className={[
                                        'rounded-xl px-4 py-3 text-sm',
                                        m.role === 'user'
                                            ? 'ml-auto max-w-sm bg-violet-600 text-white'
                                            : 'max-w-prose bg-gray-100 text-gray-800',
                                    ].join(' ')}>
                                    {part.text}
                                </div>
                            ))}

                            {getToolParts(m).map((part, index) => (
                                <pre
                                    key={`${m.id}-tool-${index}`}
                                    className="mt-2 overflow-x-auto rounded-xl bg-amber-50 px-4 py-3 text-xs text-amber-950">
                                    {JSON.stringify(
                                        {
                                            tool: getToolName(part),
                                            state:
                                                'state' in part
                                                    ? part.state
                                                    : 'unknown',
                                            input:
                                                'input' in part
                                                    ? part.input
                                                    : undefined,
                                            output:
                                                'output' in part
                                                    ? part.output
                                                    : undefined,
                                            error:
                                                'errorText' in part
                                                    ? part.errorText
                                                    : undefined,
                                        },
                                        null,
                                        2,
                                    )}
                                </pre>
                            ))}
                        </div>
                    ))}
                    {isLoading && (
                        <p className="text-sm text-gray-400">
                            Agent is thinking...
                        </p>
                    )}
                    {error && (
                        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                            Error: {error.message}
                        </p>
                    )}
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="border-t bg-white px-4 py-3">
                <div className="mx-auto flex max-w-2xl gap-3">
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Ask something that requires a tool..."
                        className="flex-1 rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-50">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}
