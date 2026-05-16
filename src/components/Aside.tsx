import {
    InformationCircleIcon,
    ExclamationTriangleIcon,
    LightBulbIcon,
} from '@heroicons/react/24/outline'
import type { Aside } from '@/types/index'
import { AsideProps } from '@/types/components'

function styleLookup(type: Aside) {
    if (type === 'warning') {
        return {
            border: 'border-accent-apex',
            bg: 'bg-accent-apex/10',
            label: 'Warning',
            labelColor: 'text-accent-apex',
            Icon: ExclamationTriangleIcon,
        }
    }
    if (type === 'tip') {
        return {
            border: 'border-font-secondary',
            bg: 'bg-font-secondary/10',
            label: 'Tip',
            labelColor: 'text-font-secondary',
            Icon: LightBulbIcon,
        }
    }
    return {
        border: 'border-accent-bright',
        bg: 'bg-accent-bright/10',
        label: 'Note',
        labelColor: 'text-accent-bright',
        Icon: InformationCircleIcon,
    }
}

export default function Aside({ type, content, link }: AsideProps) {
    const { border, bg, label, labelColor, Icon } = styleLookup(type)

    return (
        <aside
            className={`
                flex gap-3 px-4 py-3 my-2
                rounded-r-sm border-l-2
                ${border} ${bg}
            `}>
            <Icon className={`flex-none w-4 h-4 mt-0.5 ${labelColor}`} />
            <div className="flex flex-col gap-1 text-sm">
                <span
                    className={`font-semibold text-xs uppercase tracking-wide ${labelColor}`}>
                    {label}
                </span>
                <p className="text-font-paragraph leading-relaxed">{content}</p>
                {link && (
                    <a
                        href={link.href}
                        className="underline cursor-pointer text-font-paragraph">
                        {link.text}
                    </a>
                )}
            </div>
        </aside>
    )
}
