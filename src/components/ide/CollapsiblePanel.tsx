'use client'

import { useId, useState, type ReactNode } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type CollapsiblePanelProps = {
    title: string
    children: ReactNode
    defaultOpen?: boolean
    className?: string
    contentClassName?: string
    hideInnerHeaderOnMobile?: boolean
}

export default function CollapsiblePanel({
    title,
    children,
    defaultOpen = false,
    className = '',
    contentClassName = '',
    hideInnerHeaderOnMobile = true,
}: CollapsiblePanelProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const contentId = useId()

    return (
        <section className={`flex flex-col ${className}`}>
            <button
                type="button"
                aria-controls={contentId}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
                className="flex h-9 w-full items-center justify-between bg-header px-2 text-[10px] uppercase tracking-wider text-font-apex md:hidden">
                <span>{title}</span>
                <ChevronDownIcon
                    className={`size-4 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            <div
                id={contentId}
                className={`
                    ${isOpen ? 'flex' : 'hidden'}
                    min-h-0 flex-col md:flex md:h-full
                    ${hideInnerHeaderOnMobile ? 'max-md:[&>*:first-child]:hidden' : ''}
                    ${contentClassName}
                `}>
                {children}
            </div>
        </section>
    )
}
