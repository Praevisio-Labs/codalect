import Link from 'next/link'
import { sora, outfit } from '@/app/ui/fonts'
import { HeaderProps } from '@/types/components'

import BrandmarkIcon from '@/components/icons/BrandmarkIcon'
import WordmarkIcon from '@/components/icons/WordmarkIcon'
import LockupIcon from '@/components/icons/LockupIcon'
import ThemeSelect from '@/components/ThemeSelect'

export default function Header({
    theme,
    setTheme,
    path,
    linkText,
}: HeaderProps) {
    return (
        <div
            className={`
            flex justify-between
            text-font-apex
            bg-header p-2
            `}>
            <Link
                href="/"
                aria-label="Codalect home"
                className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition">
                <BrandmarkIcon className="size-7 text-font-apex" />
                <WordmarkIcon className="h-6 text-font-apex" />
            </Link>
            <div className="flex gap-5">
                <Link
                    href={path}
                    className={`
                    flex gap-1 items-center px-3
                    border-1 border-ring
                    rounded-sm bg-none 
                    text-xs
                    hover:underline hover:bg-button transition 
                    cursor-pointer
                    `}>
                    {linkText}
                </Link>
                <ThemeSelect theme={theme} setTheme={setTheme} />
            </div>
        </div>
    )
}
