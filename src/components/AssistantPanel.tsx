import { AssistantProps } from '@/types/components'

export default function AssistantPanel({ theme }: AssistantProps) {
    return (
        <>
            <div className={`text-xs text-${theme}-font`}>Assistant</div>
        </>
    )
}
