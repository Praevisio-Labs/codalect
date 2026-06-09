import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss,
    SiMarkdown,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { FileIconProps } from '@/types/components'

const extensionIcons: Record<string, { Icon: IconType; className: string }> = {
    ts: { Icon: SiTypescript, className: 'text-blue-500' },
    tsx: { Icon: SiTypescript, className: 'text-blue-500' },
    js: { Icon: SiJavascript, className: 'text-yellow-400' },
    jsx: { Icon: SiJavascript, className: 'text-yellow-400' },
    py: { Icon: SiPython, className: 'text-blue-500' },
    html: { Icon: SiHtml5, className: 'text-orange-500' },
    css: { Icon: SiCss, className: 'text-blue-400' },
    md: { Icon: SiMarkdown, className: 'text-gray-400' },
}

export default function FileIcon({ filepath }: FileIconProps) {
    const ext = filepath.split('.').pop()?.toLowerCase() ?? ''
    const entry = extensionIcons[ext]
    if (!entry) return null

    const { Icon, className } = entry
    return <Icon size={13} className={className} />
}
