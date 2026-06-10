import './styles.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'

const banner = `
 ██████╗ ██████╗ ██████╗  █████╗ ██╗     ███████╗ ██████╗████████╗
██╔════╝██╔═══██╗██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝╚══██╔══╝
██║     ██║   ██║██║  ██║███████║██║     █████╗  ██║        ██║
██║     ██║   ██║██║  ██║██╔══██║██║     ██╔══╝  ██║        ██║
╚██████╗╚██████╔╝██████╔╝██║  ██║███████╗███████╗╚██████╗   ██║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝   ╚═╝
 `.slice(1)

// Welcome to Codalect
// ───────────────────
// A place to learn and build, right in your browser.

// What you're looking at is a live sandbox: Click into the
// components in the file tree to change their text, colors,
// or logic and watch the cards 'React' in real time.
//
//   ✧  Click the button in the top-right to preview the code.
//
//   ✧  Stuck? The assistant on the right sees the file you're in or
//      any code that you highlight. You can ask it to explain code,
//      debug errors, or guide your thinking without doing it for you.
//
//   ✧  Click "Learn" in the top bar when you're ready for a real
//      project with a brief, refreshers, and starter files.

// Everything you see in the preview is assembled right here.
export default function App() {
    return (
        <main className="app">
            <section className="hero">
                <pre className="banner" role="img" aria-label="Codalect">
                    {banner}
                </pre>

                <p className="intro">
                    Welcome to <strong>Codalect</strong>
                </p>
                <p className="intro">
                    A place to learn and build with real code, right in your
                    browser.
                </p>
                <p className="intro">
                    What you're looking at is a live <strong>sandbox</strong>:
                    the code becomes this preview the instant you change it, so
                    go ahead and break things.
                </p>
                <p className="intro">
                    Click into the <code>components</code> folder in the file
                    tree to find <code>Greeting</code> and <code>Counter</code>.
                    Change their text, colors, or logic and watch the cards
                    below react in real time.
                </p>
                <Greeting defaultName="friend" />
                <Counter />
                <p className="intro">
                    Stuck? The assistant on the right can see the file you're in
                    and any code you highlight - ask it to explain code, debug
                    errors, or guide your thinking without doing it for you.
                </p>
                <p className="intro">
                    Ready for a real project? Click <strong>Learn</strong> in
                    the top bar for a guided build with a brief, refreshers, and
                    starter files.
                </p>
            </section>
        </main>
    )
}
