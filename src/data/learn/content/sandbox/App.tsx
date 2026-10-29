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
// Most AI coding tools are built to finish your code.
// Codalect's assistant is built to help you learn to write it.

// Try it (about two minutes)
//
//   ✧  Open components/Counter.tsx and ask the assistant:
//      "Write the code for an undo button on this counter."
//
//   ✧  Push back with "Just write it for me." Then switch
//      the constraint level at the top of the assistant
//      panel and ask again. Each level changes how much code
//      you're shown and how much you're asked to reason out.
//
//   ✧  Ask a general chatbot the same thing and you'll usually
//      get the finished component back, no questions asked.
//
//   ✧  The assistant reads the file you have open. Highlight
//      a few lines to narrow its focus to just those.
//
//   ✧  The icons under the chat box switch modes: Scope
//      (refine an idea), Build (one step at a time) and
//      Learn (explain a concept).

// Why we're building this
// ───────────────────────
// For professionals, task completion is the right goal. For
// learners it skips the part that matters: the reasoning
// that builds judgement. Even telling a general assistant to
// "teach, don't complete" tends to drift back to completion
// as the conversation goes on, because that's what it was
// built for. Codalect makes teaching the default instead of
// something you have to keep asking for.
//
// Full thesis:
// https://blog.stackademic.com/rethinking-coding-education-for-the-ai-era-054b40a350d5

// Click the button in the top-right of the editor to see
// the preview. Everything in it is assembled right here.
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
