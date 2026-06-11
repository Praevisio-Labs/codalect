'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { personas } from '../lib/personas'
import { PersonaSelect } from './PersonaSelect'
import { MessageList } from './MessageList'

export function Chat() {
    const [personaId, setPersonaId] = useState(personas[0].id)
    const [input, setInput] = useState('')
    const transport = useMemo(
        () =>
            new DefaultChatTransport({
                api: '/api/chat',
                body: { personaId },
            }),
        [personaId],
    )
    const { messages, sendMessage, status } = useChat({ transport })
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
            {/* Persona selector */}
            <PersonaSelect selectedId={personaId} onSelect={setPersonaId} />

            {/* Message list */}
            <MessageList messages={messages} isLoading={isLoading} />

            {/* Input form */}
            <div className="border-t bg-white px-4 py-4">
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex max-w-2xl gap-3">
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Send a message..."
                        className="flex-1 rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-50">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
