import { lusitana } from '@/app/ui/fonts'
import FileTree from '@/components/FileTree'
import CodeEditor from '@/components/CodeEditor'
import AssistantPanel from '@/components/AssistantPanel'
import ThemeSelect from '@/components/ThemeSelect'

export default function Home() {
    return (
        <main className="flex flex-col w-full h-screen bg-dark-gap overflow-hidden">
            <div className="flex justify-between bg-dark-page p-2">
                <h1 className={`${lusitana.className} text-dark-font text-2xl`}>
                    Raisin.IDE
                </h1>
                <ThemeSelect />
            </div>
            <div className="flex-1 flex gap-1 p-1 overflow-hidden">
                <div className="flex-1 h-full rounded-sm bg-dark-panel p-2">
                    <FileTree />
                </div>
                <div className="flex-4 h-full flex flex-col rounded-sm bg-dark-editor p-2">
                    <CodeEditor />
                </div>
                <div className="flex-3 h-full rounded-sm bg-dark-panel p-2">
                    <AssistantPanel />
                </div>
            </div>
        </main>
    )
}
