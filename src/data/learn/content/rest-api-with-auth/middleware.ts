import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Middleware runs on the Edge before every page render.
// This is the correct place to check auth state and redirect —
// it runs server-side, so there's no flash of unauthenticated content.
export async function middleware(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value),
                    )
                    supabaseResponse = NextResponse.next({ request })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options),
                    )
                },
            },
        },
    )

    // TODO: Call supabase.auth.getUser() to get the current session.
    // Note: always use getUser() in middleware, not getSession() —
    // getSession() reads from the cookie without verifying with the server,
    // which means it can be spoofed. getUser() makes a network call to verify.

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const { pathname } = request.nextUrl
    const isAuthPage = pathname === '/login' || pathname === '/signup'

    // TODO: If there's no user and the path is not an auth page,
    // redirect to /login. Use NextResponse.redirect(new URL('/login', request.url)).

    // TODO: If there is a user and the path is an auth page,
    // redirect to /dashboard to avoid showing the login form to logged-in users.

    return supabaseResponse
}

export const config = {
    matcher: [
        // Run middleware on all paths except static files and API routes
        '/((?!_next/static|_next/image|favicon.ico|api/).*)',
    ],
}
