import './styles.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'

const banner = `
 ██████╗ ██████╗ ██████╗  █████╗ ██╗     ███████╗ ██████╗████████╗
██╔════╝██╔═══██╗██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝╚══██╔══╝
██║     ██║   ██║██║  ██║███████║██║     █████╗  ██║        ██║
██║     ██║   ██║██║  ██║██╔══██║██║     ██╔══╝  ██║        ██║
╚██████╗╚██████╔╝██████╔╝██║  ██║███████╗███████╗╚██████╗   ██║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝   ╚═╝   `.slice(1)

// Welcome to Codalect
// ───────────────────
//
// A place to learn and build with real code, right in your
// browser. What you're looking at is a live sandbox: the code
// below becomes this preview the instant you change it, so
// go ahead and break some stuff.
//
//   ✧  Click the button in the top-right to preview the code.
//   ✧  Click into the components folder to find the Greeting and
//      Counter components, then change their text, colors, or logic
//      and watch the cards 'React' in real time.

// Everything you see in the preview is assembled right here.
export default function App() {
    return (
        <main className="app">
            <section className="hero">
                <pre className="banner" role="img" aria-label="Codalect">
                    {banner}
                </pre>

                <p className="intro">
                    Welcome to <strong>Codalect</strong> — a place to learn and
                    build with real code, right in your browser.
                </p>
                <p className="intro">
                    What you're looking at is a live <strong>sandbox</strong>:
                    the code on the left becomes this preview the instant you
                    change it, so go ahead and break things.
                </p>
                <p className="intro">
                    Open the <code>components</code> folder in the file tree to
                    find <code>Greeting</code> and <code>Counter</code>. Change
                    their text, colors, or logic and watch the cards below react
                    in real time.
                </p>
            </section>

            <Greeting defaultName="friend" />
            <Counter />
        </main>
    )
}
