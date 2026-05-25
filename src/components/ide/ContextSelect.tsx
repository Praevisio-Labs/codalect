import {
    DocumentMagnifyingGlassIcon,
    EyeSlashIcon,
} from '@heroicons/react/20/solid'
import { ContextSelectProps } from '@/types/components'

export default function ContextSelect({
    file,
    textSelection,
    isContextHidden,
    setIsContextHidden,
}: ContextSelectProps) {
    const linesHighlightedCount = textSelection.end - textSelection.start + 1

    const tooltipText = isContextHidden
        ? 'Click to include context'
        : textSelection.isActive
          ? 'Sending highlighted · Click to hide'
          : 'Sending full file · Highlight to narrow'

    return (
        <div
            onClick={() => setIsContextHidden(!isContextHidden)}
            className="group relative flex items-center gap-1 cursor-pointer text-[10px] text-font-paragraph">
            <span className={isContextHidden ? 'opacity-40' : 'opacity-80'}>
                {isContextHidden ? (
                    <EyeSlashIcon className="h-4 w-4" />
                ) : (
                    <DocumentMagnifyingGlassIcon className="h-4 w-4" />
                )}
            </span>
            <span className={isContextHidden ? 'opacity-40' : 'opacity-80'}>
                {textSelection.isActive
                    ? `${linesHighlightedCount} lines highlighted`
                    : file.name}
            </span>
            <span
                className="
                absolute -top-7 left-1/2 -translate-x-1/2
                px-1.5 py-0.5 rounded-sm
                bg-panel text-font-apex text-[9px] whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition-opacity duration-150
                pointer-events-none
            ">
                {tooltipText}
            </span>
        </div>
    )
}
