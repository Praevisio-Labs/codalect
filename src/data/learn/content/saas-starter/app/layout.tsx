import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'AI Chat Starter',
    description: 'Streaming AI chat with custom personas',
}

// Root layout — complete, no TODOs. Read it to see how the app is structured.
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
