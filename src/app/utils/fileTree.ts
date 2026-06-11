import type { File, FolderNode, Row } from '@/types/index'

function createNode(): FolderNode {
    return { folders: new Map(), files: new Map() }
}

export function buildTree(files: File[]): FolderNode {
    const root = createNode()

    for (const file of files) {
        const segments = file.path
            .split('/')
            .filter((segment) => segment.length > 0)

        let node = root
        for (let index = 0; index < segments.length - 1; index++) {
            const segment = segments[index]
            let childNode = node.folders.get(segment)
            if (childNode === undefined) {
                childNode = createNode()
                node.folders.set(segment, childNode)
            }
            node = childNode
        }

        const fileName = segments[segments.length - 1]
        node.files.set(fileName, file)
    }

    return root
}

export function flattenTree(
    node: FolderNode,
    collapsed: Set<string>,
    depth: number,
    prefix: string,
): Row[] {
    const rows: Row[] = []

    const folderNames = Array.from(node.folders.keys()).sort()
    for (const name of folderNames) {
        const path = prefix + '/' + name
        rows.push({ kind: 'folder', name, path, depth })

        const childNode = node.folders.get(name)
        if (childNode !== undefined && !collapsed.has(path)) {
            const childRows = flattenTree(childNode, collapsed, depth + 1, path)
            for (const childRow of childRows) {
                rows.push(childRow)
            }
        }
    }

    const fileNames = Array.from(node.files.keys()).sort()
    for (const name of fileNames) {
        const file = node.files.get(name)
        if (file !== undefined) {
            rows.push({ kind: 'file', name, path: file.path, depth, file })
        }
    }

    return rows
}
