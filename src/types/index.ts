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

// Sandpack runtime template for a real-file module (see src/data/learn/content/<id>/).
export type Template = 'static' | 'react-ts' | 'nextjs'

// Metadata for a real-file learner module. Mirrors Project minus inlined `files`
// (the files live in src/data/learn/content/<id>/), plus the runtime fields the
// Sandpack pipeline needs. Lives in src/data/learn/registry/<id>.ts (host-checked);
// paired to its content folder by `id`.
export type ModuleMeta = {
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
