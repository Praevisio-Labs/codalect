import { getWorkspace } from '@/app/utils/modules'
import IDEWorkspace from '@/components/ide/IDEWorkspace'

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ module?: string }>
}) {
    const { module: moduleID } = await searchParams
    const workspace = getWorkspace(moduleID ?? null)

    return <IDEWorkspace workspace={workspace} />
}
