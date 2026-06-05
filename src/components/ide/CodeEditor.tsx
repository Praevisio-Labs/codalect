import Editor, { OnMount } from '@monaco-editor/react'
import { useActiveCode, useSandpack } from '@codesandbox/sandpack-react'
import { EditorProps } from '@/types/components'

export default function CodeEditor({
    file,
    theme,
    onCursorChange,
    onHighlightChange,
}: EditorProps) {
    const { code, updateCode } = useActiveCode()
    const { sandpack } = useSandpack()

    const editorTheme = theme === 'light' ? 'vs' : 'vs-dark'

    const handleMount: OnMount = (editor) => {
        editor.onDidChangeCursorPosition((e) => {
            if (onCursorChange) onCursorChange(e.position.lineNumber)
        })
        editor.onDidChangeCursorSelection((e) => {
            const model = editor.getModel()
            if (!model) return
            const isEmpty = e.selection.isEmpty()
            if (onHighlightChange) {
                onHighlightChange({
                    isActive: !isEmpty,
                    content: isEmpty ? '' : model.getValueInRange(e.selection),
                    start: isEmpty ? 0 : e.selection.startLineNumber,
                    end: isEmpty ? 0 : e.selection.endLineNumber,
                })
            }
        })
    }

    return (
        <>
            <div
                className={`
                    flex items-center 
                    shrink-0
                    gap-1 h-9 px-2 
                    bg-header 
                    uppercase tracking-wider text-[10px] text-font-apex
                `}>
                Files
                <span className="normal-case tracking-normal text-[11px] opacity-60">
                    {' > '}
                </span>
                <span className="normal-case tracking-normal text-[11px] opacity-80">
                    {file.path.slice(1)}
                </span>
            </div>
            <div className="flex-1 min-h-0">
                <Editor
                    height="100%"
                    key={sandpack.activeFile}
                    path={sandpack.activeFile}
                    defaultValue={code}
                    className="overflow-hidden"
                    theme={editorTheme}
                    onMount={handleMount}
                    onChange={(value) => updateCode(value || '')}
                    options={{
                        fontSize: 10,
                        wordWrap: 'on',
                        glyphMargin: false,
                        cursorStyle: 'block',
                        padding: { top: 12 },
                        minimap: { enabled: false },
                        bracketPairColorization: { enabled: true },
                    }}
                />
            </div>
        </>
    )
}
