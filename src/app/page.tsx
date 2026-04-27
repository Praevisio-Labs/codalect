import { lusitana } from '@/app/ui/fonts'
import FileTree from '@/components/FileTree'
import CodeEditor from '@/components/CodeEditor'
import AssistantPanel from '@/components/AssistantPanel'

export default function Home() {
    return (
        <main className="flex flex-col w-full h-screen p-4 overflow-hidden">
            <h1 className={`${lusitana.className} text-2xl mb-4`}>
                Raisin.IDE
            </h1>
            <div className="flex-1 flex gap-1 overflow-hidden">
                <div className="flex-1 h-full rounded-sm bg-green-50 p-2">
                    <FileTree />
                </div>
                <div className="flex-4 h-full flex flex-col rounded-sm bg-blue-50 p-2">
                    <CodeEditor />
                </div>
                <div className="flex-3 h-full rounded-sm bg-purple-50 p-2">
                    <AssistantPanel />
                </div>
            </div>
        </main>
    )
}
