'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'

type Language = 'typescript' | 'javascript' | 'python' | 'java'

const SNIPPETS: Record<Language, string> = {
    typescript: `interface User{id:number;name:string;}function greet(user:User):string{return \`Hello, \${user.name}\`;}`,
    javascript: `const greet=(name)=>{console.log(\`Hello, \${name}\`);};greet("World");`,
    python: `def main():\nprint("Hello, World!")\n\nif __name__ == "__main__":\n    main()`,
    java: `public class Main{public static void main(String[] args){System.out.println("Hello");}}`,
}

export default function CodeEditor() {
    const [language, setLanguage] = useState<Language>('typescript')
    const [snippet, setSnippet] = useState(SNIPPETS[language])

    function onSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        const lang: Language = e.target.value as Language
        setLanguage(lang)
        setSnippet(SNIPPETS[lang])
    }

    return (
        <div>
            <select value={language} onChange={onSelect}>
                <option value="typescript">TypeScript</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
            </select>
            <Editor height="90vh" value={snippet} language={language} />
        </div>
    )
}
