'use client'

import { useState } from 'react'
import FileIcon from '@/components/FileIcon'
import { FILES } from '@/data/files'
import { FileTreeProps } from '@/types/components'

export default function FileTree({ theme }: FileTreeProps) {
    const [selected, setSelected] = useState<string | null>(null)

    const baseStyle = `border border-${theme}-accent bg-${theme}-card text-${theme}-font hover:opacity-60`
    const highlightStyle = `border-y-2 border-${theme}-gap -my-px bg-${theme}-font text-${theme}-card`

    function handleSelect(name: string) {
        setSelected(name)
    }

    return (
        <>
            <div className={`text-xs text-${theme}-font p-2`}>Explorer</div>
            <ul className="flex flex-col gap-1">
                {FILES.map((file, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(file.name)}
                        className={`
                            flex items-center gap-2
                            text-xs px-2 py-1
                            cursor-pointer
                            ${selected === file.name ? highlightStyle : baseStyle}
                            `}>
                        <FileIcon fileType={file.fileType} />
                        {file.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
