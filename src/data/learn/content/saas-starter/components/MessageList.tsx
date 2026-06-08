'use client'

import type { UIMessage } from 'ai'

type MessageListProps = {
    messages: UIMessage[]
    isLoading: boolean
}

function getMessageText(message: UIMessage) {
    return message.parts
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join('')
}

export function MessageList({ messages, isLoading }: MessageListProps) {
    return (
        <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="mx-auto max-w-2xl space-y-4">
                {messages.length === 0 && (
                    <p className="text-center text-sm text-gray-400">
                        Start a conversation.
                    </p>
                )}
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={[
                            'rounded-xl px-4 py-3 text-sm',
                            message.role === 'user'
                                ? 'ml-auto max-w-sm bg-violet-600 text-white'
                                : 'max-w-prose bg-gray-100 text-gray-800',
                        ].join(' ')}>
                        {getMessageText(message)}
                    </div>
                ))}
                {isLoading && (
                    <p className="text-sm text-gray-400">
                        Assistant is thinking...
                    </p>
                )}
            </div>
        </div>
    )
}
