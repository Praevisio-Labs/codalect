'use client'

import { personalInfo } from '../lib/data'

const links = [
    { href: '/', label: 'Work' },
    { href: '/about', label: 'About' },
]

type NavProps = {
    pathname: string
    onNavigate: (href: string) => void
}

export function Nav({ pathname, onNavigate }: NavProps) {
    // TODO: Use the current path to apply an active style to the matching nav link.

    return (
        <nav className="border-b bg-white px-6 py-4">
            <div className="mx-auto flex max-w-4xl items-center justify-between">
                <button
                    type="button"
                    onClick={() => onNavigate('/')}
                    className="font-semibold text-gray-900">
                    {personalInfo.name}
                </button>
                <div className="flex gap-6">
                    {links.map(({ href, label }) => (
                        <button
                            key={href}
                            type="button"
                            onClick={() => onNavigate(href)}
                            className={[
                                'text-sm transition-colors',
                                // TODO: Apply 'text-gray-900 font-medium' when pathname === href,
                                // and 'text-gray-500 hover:text-gray-900' otherwise.
                                'text-gray-500 hover:text-gray-900',
                            ].join(' ')}>
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}
