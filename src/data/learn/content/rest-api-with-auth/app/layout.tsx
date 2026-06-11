import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Full-Stack Auth App',
    description: 'Authentication with Supabase',
}

// Root layout — complete, no TODOs.
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
