'use client'

import { personas } from '../lib/personas'

type PersonaSelectProps = {
    selectedId: string
    onSelect: (id: string) => void
}

// This component is complete — no TODOs. Read it to understand how the
// selected persona ID is passed up to the parent Chat component.
export function PersonaSelect({ selectedId, onSelect }: PersonaSelectProps) {
    return (
        <div className="border-b bg-white px-4 py-3">
            <div className="mx-auto flex max-w-2xl items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                    Persona:
                </span>
                {personas.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => onSelect(p.id)}
                        className={[
                            'rounded-full px-3 py-1 text-sm font-medium transition-colors',
                            selectedId === p.id
                                ? 'bg-violet-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                        ].join(' ')}>
                        {p.name}
                    </button>
                ))}
            </div>
        </div>
    )
}
