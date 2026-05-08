'use client'

import { useState } from 'react'
import {
    DocumentMagnifyingGlassIcon,
    EyeSlashIcon,
} from '@heroicons/react/20/solid'
import { AgentContextDisplayProps } from '@/types/components'

export default function AgentContextDisplay({
    theme,
    file,
    textSelection,
}: AgentContextDisplayProps) {
    const [isContextHidden, setIsContextHidden] = useState(false)
    const linesHighlightedCount = textSelection.end - textSelection.start + 1

    return (
        <div className={`${isContextHidden ? 'opacity-40' : 'opacity-100'}`}>
            {isContextHidden ? (
                <div
                    onClick={() => setIsContextHidden(!isContextHidden)}
                    className={`px-3 py-2 cursor-pointer`}>
                    <DocumentMagnifyingGlassIcon
                        className={`h-[lh] w-[lh] text-${theme}-font-tertiary`}
                    />
                </div>
            ) : (
                <div
                    onClick={() => setIsContextHidden(!isContextHidden)}
                    className={`px-3 py-2 cursor-pointer`}>
                    <EyeSlashIcon
                        className={`h-[lh] w-[lh] text-${theme}-font-tertiary`}
                    />
                </div>
            )}
            <div
                className={`
                    flex 
                    text-xs text-${theme}-font-tertiary 
                    p-2
                `}>
                {textSelection.isActive
                    ? `${linesHighlightedCount} lines highlighted`
                    : `${file.name}`}
            </div>
        </div>
    )
}
