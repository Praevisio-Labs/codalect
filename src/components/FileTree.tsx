import { FileTreeProps } from '@/types/components'
import { FILES } from '@/data/files'

export default function FileTree({ theme }: FileTreeProps) {
    return (
        <>
            <div className={`text-xs text-${theme}-font p-2`}>Explorer</div>
            <ul className="flex flex-col gap-1">
                {FILES.map((file, index) => (
                    <li
                        key={index}
                        className={`border border-${theme}-accent 
                            bg-${theme}-card text-xs text-${theme}-font 
                            px-2 py-1`}>
                        {file.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
