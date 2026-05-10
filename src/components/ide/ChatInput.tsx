import { ChatInputProps } from '@/types/components'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

import ContextSelect from '@/components/ide/ContextSelect'
import ModelSelect from '@/components/ide/ModelSelect'

export default function ChatInput({
    theme,
    status,
    input,
    setInput,
    sendMessage,
    file,
    fileContent,
    cursorLine,
    textSelection,
    isContextHidden,
    setIsContextHidden,
    selectedPersona,
    selectedModel,
    setSelectedModel,
}: ChatInputProps) {
    function handleSubmit() {
        if (input.trim()) {
            const body = isContextHidden
                ? { selectedPersona }
                : {
                      fileName: file.name,
                      fileContent,
                      cursorLine,
                      selectedPersona,
                  }
            sendMessage({ text: input }, { body })
            setInput('')
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`
                flex-none w-[88%] flex my-4
                flex flex-col
                rounded-sm
                bg-${theme}-input 
                ring-1 ring-transparent
                focus-within:ring-${theme}-accent-primary
                transition
            `}>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question, I'm here to help..."
                className={`
                    field-sizing-content
                    max-h-20
                    resize-none outline-none
                    bg-transparent
                    text-xs text-${theme}-font-primary
                    px-2 pt-2 pb-1
                `}
            />
            <div className="flex items-center gap-2 px-2 pb-1">
                <div className="flex-1 min-w-0">
                    <ContextSelect
                        theme={theme}
                        file={file}
                        textSelection={textSelection}
                        isContextHidden={isContextHidden}
                        setIsContextHidden={setIsContextHidden}
                    />
                </div>
                <ModelSelect
                    theme={theme}
                    selectedModel={selectedModel}
                    setSelectedModel={setSelectedModel}
                />
                <button
                    type="submit"
                    disabled={status !== 'ready'}
                    className={`bg-${theme}-accent-primary px-1 py-0.5 rounded-sm`}>
                    <ArrowUpCircleIcon className="h-5 w-5" />
                </button>
            </div>
        </form>
    )
}
