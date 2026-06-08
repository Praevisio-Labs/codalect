import { useState } from 'react'
import { SandpackPreview, SandpackConsole } from '@codesandbox/sandpack-react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { PreviewDrawerProps } from '@/types/components'

export default function PreviewDrawer({ isOpen, onClose }: PreviewDrawerProps) {
    const [isConsoleOpen, setIsConsoleOpen] = useState(false)

    return (
        <div
            className={`
                max-md:fixed max-md:inset-0 max-md:z-40
                md:absolute md:inset-0 md:z-20
                flex flex-col
                rounded-sm md:rounded-bl-lg
                bg-editor overflow-hidden
                transition-transform duration-200 ease-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
            {/* Title */}
            <div
                className={`
                flex items-center justify-between
                shrink-0
                h-9 px-2
                bg-header
                uppercase tracking-wider
                text-[10px] text-font-apex
            `}>
                <span>Preview Code</span>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close preview"
                    className="cursor-pointer text-font-apex hover:opacity-80">
                    <XMarkIcon className="size-4" />
                </button>
            </div>

            {/* Preview */}
            <div className="flex-1 min-h-0">
                <SandpackPreview
                    style={{ height: '100%' }}
                    showOpenInCodeSandbox={false}
                    showRefreshButton
                    showNavigator={false}
                />
            </div>

            {/* Console */}
            <div className="flex-none border-t border-accent-muted">
                <button
                    type="button"
                    onClick={() => setIsConsoleOpen(!isConsoleOpen)}
                    className="flex h-9 w-full items-center justify-between bg-header px-2 text-[10px] uppercase tracking-wider text-font-apex">
                    <span>Console</span>
                    <ChevronDownIcon
                        className={`size-4 transition-transform ${isConsoleOpen ? 'rotate-180' : ''}`}
                    />
                </button>
                {isConsoleOpen && (
                    <div className="h-40">
                        <SandpackConsole style={{ height: '100%' }} />
                    </div>
                )}
            </div>
        </div>
    )
}
