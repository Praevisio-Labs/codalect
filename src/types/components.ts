import { File } from './index'

export interface FileTreeProps {
    theme: string
}

export interface EditorProps {
    file: File
    theme: string
}

export interface AssistantProps {
    theme: string
}

export interface ThemeProps {
    theme: string
    setTheme: (theme: string) => void
}

export interface LogoProps {
    className?: string
}

export interface FileIconProps {
    fileType: string
}
