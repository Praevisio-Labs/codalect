'use client'

import { useState } from 'react'
import type { Language } from '@/types/index'
import { SNIPPETS } from '@/data/snippets'
import Editor from '@monaco-editor/react'

export default function CodeEditor({ theme }: { theme: string }) {
    const [language, setLanguage] = useState<Language>('typescript')
    const [snippet, setSnippet] = useState(SNIPPETS[language])

    const editorTheme = theme == 'light' ? 'vs' : 'vs-dark'

    function onSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        const lang: Language = e.target.value as Language
        setLanguage(lang)
        setSnippet(SNIPPETS[lang])
    }

    return (
        <>
            <select
                value={language}
                onChange={onSelect}
                className={`text-xs text-${theme}-font`}>
                <option value="typescript">TypeScript</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
            </select>
            <div className="flex-1 min-h-0 mt-2">
                <Editor
                    height="100%"
                    value={snippet}
                    language={language}
                    className="rounded-sm overflow-hidden"
                    theme={editorTheme}
                />
            </div>
        </>
    )
}
