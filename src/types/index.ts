export type Language =
    | 'typescript'
    | 'javascript'
    | 'python'
    | 'java'
    | 'html'
    | 'css'
    | 'markdown'
    | 'json'
    | 'sql'
    | 'text'

export type Link = {
    href: string
    text: string
}

export type File = {
    path: string
    content: string
}

export type FolderNode = {
    folders: Map<string, FolderNode>
    files: Map<string, File>
}

export type Row =
    | { kind: 'folder'; name: string; path: string; depth: number }
    | { kind: 'file'; name: string; path: string; depth: number; file: File }

export type Project = {
    id: string
    name: string
    description: string
    overview: string
    instructions: string
    outcomes: string
    skills: string[]
    domains: Domain[]
    level: Level
    duration: string
    isReleased?: boolean
    files: File[]
}

export type Template = 'static' | 'react-ts' | 'nextjs'

export type ModuleMetadata = {
    id: string
    name: string
    description: string
    overview: string
    instructions: string
    outcomes: string
    skills: string[]
    domains: Domain[]
    level: Level
    duration: string
    isReleased?: boolean
    template: Template
    activeFile: string
    visibleFiles?: string[]
}

export type SandpackFile = { code: string; hidden?: boolean }
export type SandpackFiles = Record<string, SandpackFile>

export type Workspace = {
    key: string
    template: Template
    activeFile: string
    files: SandpackFiles
}

export type Skill = {
    id: string
    name?: string
    content: string
}

export type Aside = 'note' | 'warning' | 'tip'

export type TextSelection = {
    isActive: boolean
    content: string
    start: number
    end: number
}

export interface Task {
    key: 'scope' | 'build' | 'learn'
    name: string
    description: {
        short: string
        long: string
    }
}

export interface Constraint {
    level: 1 | 2 | 3
    name: string
    description: {
        short: string
        long: string
    }
}

export interface Model {
    name: string
    modelId: string
    description: {
        short: string
        medium: string
        long: string
    }
}

export type Domain =
    | 'frontend'
    | 'backend'
    | 'full-stack'
    | 'devops'
    | 'data'
    | 'ai'
    | 'agents'
    | 'rag'
    | 'tool-calling'
    | 'security'
    | 'testing'
    | 'mobile'

export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export type AssistantContext = {
    fileName: string
    fileContent: string
    cursorLine: number
}
