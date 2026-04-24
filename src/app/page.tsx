import { lusitana } from '@/app/ui/fonts'
import CodeEditor from '@/components/CodeEditor'

export default function Home() {
    return (
        <div className="flex flex-col">
            <main>
                <h1 className={`${lusitana.className} text-2xl m-4`}>
                    Raisin.IDE
                </h1>
                <CodeEditor />
            </main>
        </div>
    )
}
