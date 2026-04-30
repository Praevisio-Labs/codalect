import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss,
    SiMarkdown,
} from 'react-icons/si'
import { FileIconProps } from '@/types/components'

const iconLookup: Record<string, React.ReactNode> = {
    typescript: <SiTypescript size={13} className="text-blue-500" />,
    javascript: <SiJavascript size={13} className="text-yellow-400" />,
    python: <SiPython size={13} className="text-blue-500" />,
    html: <SiHtml5 size={13} className="text-orange-500" />,
    css: <SiCss size={13} className="text-blue-400" />,
    markdown: <SiMarkdown size={13} className="text-gray-400" />,
}

export default function FileIcon({ fileType }: FileIconProps) {
    return iconLookup[fileType]
}
