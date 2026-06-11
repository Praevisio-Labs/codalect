'use client'

import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
    label: string
    variant?: ButtonVariant
    size?: ButtonSize
    loading?: boolean
    disabled?: boolean
    icon?: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

// TODO: Define variantClasses — a map from ButtonVariant to a Tailwind class string.
// Each variant should have distinct background, text, and hover colors.
// Example shape: const variantClasses: Record<ButtonVariant, string> = { primary: '...', ... }

// TODO: Define sizeClasses — a map from ButtonSize to padding and text-size classes.

export function Button({
    label,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    icon,
    onClick,
    type = 'button',
}: ButtonProps) {
    const isDisabled = disabled || loading

    // TODO: Combine variantClasses[variant], sizeClasses[size], and base classes
    // into a single className string. Include a disabled:opacity-50 class for
    // the disabled state.
    const className =
        'inline-flex items-center gap-2 rounded font-medium transition-colors'

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={className}>
            {/* TODO: Render a loading spinner when loading is true.
                A simple <span> with an animate-spin border class works well.
                When not loading, render the icon prop if provided. */}
            {label}
        </button>
    )
}
