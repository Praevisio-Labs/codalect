import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Protected dashboard page. Middleware should redirect unauthenticated users,
// but we check again here to be defensive. Complete, no TODOs.
export default async function DashboardPage() {
    const cookieStore = await cookies()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookieStore.set(name, value, options),
                    )
                },
            },
        },
    )

    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) redirect('/login')

    return (
        <main className="mx-auto max-w-2xl px-6 py-12">
            <h1 className="mb-8 text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome, {user.email}</p>
            <form action="/auth/signout" method="post" className="mt-6">
                <button
                    type="submit"
                    className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                    Sign out
                </button>
            </form>
        </main>
    )
}
