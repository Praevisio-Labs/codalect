import type { File } from '@/types/index'

export function loadFiles(files: File[]): Record<string, string> {
    const sandpackFiles: Record<string, string> = {}

    for (const file of files) {
        sandpackFiles[file.path] = file.content
    }

    return sandpackFiles
}
