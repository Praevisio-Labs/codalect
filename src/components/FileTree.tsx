import { FileTreeProps } from '@/types/components'

export default function FileTree({ theme }: FileTreeProps) {
    return (
        <>
            <div className={`text-xs text-${theme}-font`}>Explorer</div>
        </>
    )
}
