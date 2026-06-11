'use client'

import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import FileIcon from '@/components/icons/FileIcon'
import { buildTree, flattenTree } from '@/app/utils/fileTree'
import { FileTreeProps } from '@/types/components'

export default function FileTree({ files, selected, onSelect }: FileTreeProps) {
    const baseStyle = `border border-accent-muted bg-card text-font-apex hover:opacity-60`
    const highlightStyle = `border border-accent-muted bg-highlight text-card`

    const [collapsed, setCollapsed] = useState<Set<string>>(new Set())

    function toggleFolder(path: string) {
        setCollapsed((previous) => {
            const next = new Set(previous)
            if (next.has(path)) {
                next.delete(path)
            } else {
                next.add(path)
            }
            return next
        })
    }

    const tree = buildTree(files)
    const rows = flattenTree(tree, collapsed, 0, '')

    return (
        <>
            <div
                className={`
                    flex items-center
                    shrink-0
                    h-9 px-2
                    bg-header
                    uppercase font-manrope tracking-wider
                    text-[10px] text-font-apex
                `}>
                Explorer
            </div>
            <ul className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-0.5">
                {rows.map((row) =>
                    row.kind === 'folder' ? (
                        <li
                            key={row.path}
                            onClick={() => toggleFolder(row.path)}
                            style={{
                                paddingLeft: `${0.25 + row.depth * 0.75}rem`,
                            }}
                            className={`
                                flex items-center gap-0.5
                                pr-1 py-1
                                text-[9px] md:text-[10px] 
                                font-manrope tracking-wider
                                cursor-pointer
                                ${baseStyle}
                            `}>
                            <ChevronRightIcon
                                className={`size-3 shrink-0 transition-transform ${
                                    collapsed.has(row.path) ? '' : 'rotate-90'
                                }`}
                            />
                            {row.name}
                        </li>
                    ) : (
                        <li
                            key={row.path}
                            onClick={() => onSelect(row.file)}
                            style={{
                                paddingLeft: `${0.25 + row.depth * 0.75}rem`,
                            }}
                            className={`
                                flex items-center gap-1.5
                                pr-1 py-1
                                text-[9px] md:text-[10px] 
                                font-manrope tracking-wider
                                cursor-pointer
                                ${selected.path === row.path ? highlightStyle : baseStyle}
                            `}>
                            <FileIcon filepath={row.path} />
                            {row.name}
                        </li>
                    ),
                )}
            </ul>
        </>
    )
}
