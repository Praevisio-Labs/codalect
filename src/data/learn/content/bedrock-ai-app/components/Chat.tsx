'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport, type UIMessage } from 'ai'
import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { MODELS, type BedrockModelId } from '../lib/bedrock'

const MODEL_OPTIONS: { id: BedrockModelId; label: string; helper: string }[] = [
    {
        id: MODELS.claudeSonnet,
        label: 'Claude 3.5 Sonnet',
        helper: 'Best for deeper reasoning and code help.',
    },
    {
        id: MODELS.claudeHaiku,
        label: 'Claude 3 Haiku',
        helper: 'Faster responses for short support tasks.',
    },
]

function getMessageText(message: UIMessage) {
    return message.parts
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join('')
}

export function Chat() {
    const [modelId, setModelId] = useState<BedrockModelId>(MODELS.claudeSonnet)
    const [input, setInput] = useState('')
    const transport = useMemo(
        () =>
            new DefaultChatTransport({
                api: '/api/chat',
                body: { modelId },
            }),
        [modelId],
    )
    const { messages, sendMessage, status, error } = useChat({ transport })
    const isLoading = status === 'submitted' || status === 'streaming'

    const selectedOption = MODEL_OPTIONS.find((option) => option.id === modelId)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const text = input.trim()
        if (!text || isLoading) return

        void sendMessage({ text })
        setInput('')
    }

    return (
        <main className="shell">
            <section className="workspace">
                <header className="hero">
                    <div>
                        <p className="eyebrow">AWS Bedrock</p>
                        <h1>Claude chat through enterprise credentials</h1>
                    </div>
                    <label className="modelPicker">
                        <span>Model</span>
                        <select
                            value={modelId}
                            onChange={(event) =>
                                setModelId(event.target.value as BedrockModelId)
                            }>
                            {MODEL_OPTIONS.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                </header>

                <p className="modelHint">{selectedOption?.helper}</p>

                <div className="conversation" aria-live="polite">
                    {messages.length === 0 ? (
                        <div className="emptyState">
                            Ask about IAM setup, model access, or streaming
                            route handlers.
                        </div>
                    ) : (
                        messages.map((message) => (
                            <article
                                key={message.id}
                                className={`message ${message.role}`}>
                                <span>{message.role}</span>
                                <p>{getMessageText(message)}</p>
                            </article>
                        ))
                    )}

                    {isLoading ? (
                        <p className="status">Streaming response...</p>
                    ) : null}

                    {error ? (
                        <p className="error">
                            {error.message ||
                                'The Bedrock route returned an error.'}
                        </p>
                    ) : null}
                </div>

                <form className="composer" onSubmit={handleSubmit}>
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Ask how Bedrock credentials are resolved..."
                    />
                    <button type="submit" disabled={isLoading || !input.trim()}>
                        Send
                    </button>
                </form>
            </section>
        </main>
    )
}
