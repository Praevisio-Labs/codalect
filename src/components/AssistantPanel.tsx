'use client'

import { useState } from 'react'
import { AssistantProps } from '@/types/components'
import RaisinIcon from '@/components/RaisinIcon'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

export default function AssistantPanel({ theme }: AssistantProps) {
    const [query, setQuery] = useState('')
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi! What are we building today?' },
    ])

    const userStyle =
        'max-w-[75%] self-end border rounded-sm opacity-66 font-medium mt-6'
    const assistantStyle = 'self-start mt-3'

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        const userQuery = {
            role: 'user',
            content: query,
        }

        setMessages((prev) => [
            ...prev,
            userQuery, //
        ])

        appendMockResponse()
    }

    function appendMockResponse() {
        const assistantResponse = {
            role: 'assistant',
            content:
                'Great question. But the endpoint is not live. Check back soon!',
        }
        setMessages((prev) => [
            ...prev,
            assistantResponse, //
        ])
    }

    return (
        <>
            <div className={`bg-${theme}-page text-xs text-${theme}-font p-2`}>
                Assistant
            </div>
            <div className="flex-1 items-center flex flex-col overflow-hidden p-2">
                <RaisinIcon
                    className={`flex-none h-8 w-8 text-${theme}-font m-4`}
                />
                <div className="flex-1 w-full overflow-y-auto flex flex-col">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`
                            text-xs text-${theme}-font px-2 py-1
                            ${msg.role === 'user' ? userStyle : assistantStyle}
                            `}>
                            {msg.content}
                        </div>
                    ))}
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={`flex-none w-[88%] flex rounded-sm overflow-hidden bg-${theme}-input my-4`}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Ask a question, I'm here to help..."
                        className={`flex-1 text-xs text-${theme}-font px-2 py-1`}
                    />
                    <button className={`bg-${theme}-accent px-1`}>
                        <ArrowUpCircleIcon className="h-5 w-5" />
                    </button>
                </form>
            </div>
        </>
    )
}
