'use client'

import {useState} from 'react'
import { AssistantProps } from '@/types/components'
import RaisinIcon from '@/components/RaisinIcon'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

const messages = [
    { role: 'assistant', content: 'What are we building today?' },
    { role: 'user', content: 'A disco-themed Tic Tac Toe app.' },
    {
        role: 'assistant',
        content:
            'Love it. Want to start with the board layout or the disco styling?',
    },
    { role: 'user', content: 'Styling first. Think mirror balls and neon.' },
    {
        role: 'assistant',
        content:
            'Got it — neon grid lines, glowing X and O, animated background. Should the board pulse to a beat?',
    },
    { role: 'user', content: 'Yes! Can we add a BPM slider?' },
    {
        role: 'assistant',
        content:
            "Absolutely. I'll wire it to a CSS animation duration variable.",
    },
]

export default function AssistantPanel({ theme }: AssistantProps) {
    const [userQuery, setUserQuery] = useState('')

    const userStyle = 'self-end border rounded-sm opacity-66 font-medium'
    const assistantStyle = 'self-start'

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserQuery(e.target.value)
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("User asked:", userQuery)
    }

    return (
        <>
            <div className={`bg-${theme}-page text-xs text-${theme}-font p-2`}>
                Assistant
            </div>
            <div className="flex-1 items-center flex flex-col justify-between p-2">
                <RaisinIcon className={`h-8 w-8 text-${theme}-font m-4`} />
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
                {/* Check onChange: {userQuery} */}
                <form
                    onSubmit={handleSubmit}
                    className={`w-[88%] flex rounded-sm overflow-hidden bg-${theme}-editor mb-4`}>
                    <input 
                        type="text" 
                        value={userQuery} 
                        onChange={handleChange} 
                        placeholder="How can I help?"
                        className={`flex-1 text-xs text-${theme}-font px-2 py-1`} />
                    <button className={`bg-${theme}-accent px-1`}>
                        <ArrowUpCircleIcon className="h-5 w-5" />
                    </button>
                </form>
            </div>
        </>
    )
}
