import { sora } from '@/app/ui/fonts'
import { HeaderProps } from '@/types/components'
import ThemeSelect from '@/app/ui/ThemeSelect'

export default function Header({ theme, setTheme }: HeaderProps) {
    return (
        <div className={`flex justify-between bg-${theme}-page p-2`}>
            <h1
                className={`${sora.className} text-${theme}-font-primary text-2xl`}>
                Raisin.IDE
            </h1>
            <ThemeSelect theme={theme} setTheme={setTheme} />
        </div>
    )
}
