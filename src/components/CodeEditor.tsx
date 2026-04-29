import Editor from '@monaco-editor/react'
import { EditorProps } from '@/types/components'

export default function CodeEditor({ file, theme }: EditorProps) {
    const editorTheme = theme == 'light' ? 'vs' : 'vs-dark'

    return (
        <div className="flex-1 min-h-0 mt-2">
            <Editor
                height="100%"
                value={file.content}
                language={file.fileType}
                className="rounded-sm overflow-hidden"
                theme={editorTheme}
            />
        </div>
    )
}
