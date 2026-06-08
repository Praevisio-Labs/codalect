import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Tool-Calling Agent',
    description: 'AI agent with tool use capabilities',
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
