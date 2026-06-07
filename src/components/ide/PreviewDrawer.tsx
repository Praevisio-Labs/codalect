import { useState } from 'react'
import { SandpackPreview, SandpackConsole } from '@codesandbox/sandpack-react'
import { PreviewDrawerProps } from '@/types/components'

export default function PreviewDrawer({ isOpen }: PreviewDrawerProps) {
    const [isConsoleOpen, setIsConsoleOpen] = useState(false)

    return (
        <div>
            <div>
                <SandpackPreview
                    style={{ height: '100%' }}
                    showOpenInCodeSandbox={false}
                    showRefreshButton
                    showNavigator={false}
                    showOpenNewtab
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => setIsConsoleOpen(!isConsoleOpen)}>
                    Console
                </button>
                {isConsoleOpen && (
                    <div>
                        <SandpackConsole style={{ height: '100%' }} />
                    </div>
                )}
            </div>
        </div>
    )
}
