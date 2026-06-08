import { useState } from 'react'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import { Nav } from './components/Nav'

export default function App() {
    const [pathname, setPathname] = useState('/')

    return (
        <>
            <Nav pathname={pathname} onNavigate={setPathname} />
            {pathname === '/about' ? <AboutPage /> : <HomePage />}
        </>
    )
}
