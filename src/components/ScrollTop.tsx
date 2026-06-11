import { ArrowUpIcon } from '@heroicons/react/20/solid'
import { ScrollTopProps } from '@/types/components'

export default function ScrollTop({ targetId }: ScrollTopProps) {
    return (
        <a
            href={`#${targetId}`}
            className="absolute inset-y-0 right-5 flex items-center underline cursor-pointer text-xs text-link hover:text-electric-sapphire transition-colors">
            <ArrowUpIcon className="h-4 w-5" />
            Back to top
        </a>
    )
}
