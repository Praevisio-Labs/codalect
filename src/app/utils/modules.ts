import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

import { moduleData } from '@/data/learn/registry'
import type { ModuleMetadata, SandpackFiles, Workspace } from '@/types/index'

const CONTENT_ROOT = join(process.cwd(), 'src', 'data', 'learn', 'content')

const HIDDEN_CONFIG = new Set([
    '/package.json',
    '/tsconfig.json',
    '/next-env.d.ts',
    '/index.jsx',
    '/index.tsx',
])

function isHiddenByDefault(path: string): boolean {
    return HIDDEN_CONFIG.has(path) || path.startsWith('/public/')
}

function readModuleFiles(id: string): Record<string, string> {
    const dir = join(CONTENT_ROOT, id)
    const result: Record<string, string> = {}

    for (const entry of readdirSync(dir, {
        recursive: true,
        withFileTypes: true,
    })) {
        if (!entry.isFile() || entry.name === '.DS_Store') continue
        const full = join(entry.parentPath, entry.name)
        const vfsPath = '/' + relative(dir, full).split(sep).join('/')
        result[vfsPath] = readFileSync(full, 'utf8')
    }

    return result
}

export function getModule(id: string | null): ModuleMetadata | undefined {
    if (!id) return undefined
    return moduleData.find((module) => module.id === id)
}

export function isRenderable(
    meta: ModuleMetadata | undefined,
): meta is ModuleMetadata {
    return (
        !!meta &&
        meta.isReleased !== false &&
        existsSync(join(CONTENT_ROOT, meta.id))
    )
}

function applyVisibility(
    meta: ModuleMetadata,
    files: Record<string, string>,
): SandpackFiles {
    const allowlist = meta.visibleFiles
    const result: SandpackFiles = {}

    for (const [path, code] of Object.entries(files)) {
        const hidden = allowlist
            ? !allowlist.includes(path)
            : isHiddenByDefault(path)
        result[path] = hidden ? { code, hidden: true } : { code }
    }

    return result
}

const SANDBOX_ID = 'sandbox'

function getSandbox(): Workspace {
    const files = readModuleFiles(SANDBOX_ID)
    const result: SandpackFiles = {}

    for (const [path, code] of Object.entries(files)) {
        result[path] = isHiddenByDefault(path) ? { code, hidden: true } : { code }
    }

    return {
        key: SANDBOX_ID,
        template: 'react-ts',
        activeFile: '/App.tsx',
        files: result,
    }
}

export function getWorkspace(id: string | null): Workspace {
    const meta = getModule(id)
    if (!isRenderable(meta)) return getSandbox()

    return {
        key: meta.id,
        template: meta.template,
        activeFile: meta.activeFile,
        files: applyVisibility(meta, readModuleFiles(meta.id)),
    }
}
