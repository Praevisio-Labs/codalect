// App.tsx — your React playground.
// Edit anything here and the preview updates instantly.

import { useState } from 'react'
import './styles.css'

// A component is just a function that returns JSX.
// This one tracks its own number with the useState hook.
function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <h2>Counter</h2>
            <div className="counter">
                <button onClick={() => setCount(count - 1)}>−</button>
                <span className="counter-value">{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}

// Components can take "props" — values passed in by their parent.
// `defaultName` seeds the input; typing updates the greeting live.
function Greeting({ defaultName }: { defaultName: string }) {
    const [name, setName] = useState(defaultName)

    return (
        <div className="card">
            <h2>Greeting</h2>
            <p className="greeting">Hey, {name || 'stranger'}! 👋</p>
            <input
                className="input"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Type your name"
            />
        </div>
    )
}

// App composes the components above into the page you see.
export default function App() {
    return (
        <main className="app">
            <h1>React Sandbox</h1>
            <p className="intro">
                A space to experiment. Tweak the components below, or write your
                own and drop it into <code>App</code>.
            </p>

            <Greeting defaultName="friend" />
            <Counter />
        </main>
    )
}
