'use client'

import { useId } from 'react'

type TextInputProps = {
    value: string
    onChange: (value: string) => void
    label?: string
    placeholder?: string
    hint?: string
    error?: string
    disabled?: boolean
    type?: 'text' | 'email' | 'password' | 'search'
}

export function TextInput({
    value,
    onChange,
    label,
    placeholder,
    hint,
    error,
    disabled = false,
    type = 'text',
}: TextInputProps) {
    // useId generates a stable unique ID for associating label and input.
    // This is important for accessibility — screen readers use the association
    // to announce the label when the input is focused.
    const id = useId()

    // TODO: Build the input's border className. It should use a red border
    // when error is truthy, and a normal gray border otherwise.
    const inputClassName = [
        'w-full rounded border px-3 py-2 text-sm outline-none transition-colors',
        'focus:ring-2',
        disabled ? 'cursor-not-allowed opacity-50' : '',
        // TODO: add conditional error/normal border classes here
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className="flex flex-col gap-1">
            {/* TODO: Render the label element if the label prop is provided.
                Use htmlFor={id} to associate it with the input below. */}

            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                className={inputClassName}
                aria-invalid={!!error}
                aria-describedby={
                    error ? `${id}-error` : hint ? `${id}-hint` : undefined
                }
            />

            {/* TODO: Render the error message if error is truthy.
                Give it id={`${id}-error`} so aria-describedby works.
                Render the hint if hint is truthy and there's no error.
                Give it id={`${id}-hint`}. */}
        </div>
    )
}
