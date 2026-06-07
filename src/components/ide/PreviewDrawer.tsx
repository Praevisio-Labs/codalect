import { useState } from 'react'
import { SandpackPreview, SandpackConsole } from '@codesandbox/sandpack-react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { PreviewDrawerProps } from '@/types/components'

export default function PreviewDrawer({ isOpen }: PreviewDrawerProps) {
    const [isConsoleOpen, setIsConsoleOpen] = useState(false)

    return (
        <div
            className={`
                max-md:fixed max-md:inset-0 max-md:z-40
                md:absolute md:inset-0 md:z-20
                flex flex-col
                bg-editor overflow-hidden
                transition-transform duration-200 ease-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
            <div className="flex-1 min-h-0">
                <SandpackPreview
                    style={{ height: '100%' }}
                    showOpenInCodeSandbox={false}
                    showRefreshButton
                    showNavigator={false}
                    showOpenNewtab
                />
            </div>
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
