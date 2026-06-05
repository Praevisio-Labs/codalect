import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss,
    SiMarkdown,
} from 'react-icons/si'
import { FileIconProps } from '@/types/components'

const extensionLookup: Record<string, React.ReactNode> = {
    ts: <SiTypescript size={13} className="text-blue-500" />,
    tsx: <SiTypescript size={13} className="text-blue-500" />,
    js: <SiJavascript size={13} className="text-yellow-400" />,
    jsx: <SiJavascript size={13} className="text-yellow-400" />,
    py: <SiPython size={13} className="text-blue-500" />,
    html: <SiHtml5 size={13} className="text-orange-500" />,
    css: <SiCss size={13} className="text-blue-400" />,
    md: <SiMarkdown size={13} className="text-gray-400" />,
}

export default function FileIcon({ filepath }: FileIconProps) {
    const ext = filepath.split('.').pop() ?? ''
    return extensionLookup[ext] ?? null
}
