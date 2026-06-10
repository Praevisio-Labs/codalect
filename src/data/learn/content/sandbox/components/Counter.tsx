// Counter.tsx — a component that remembers its own number with useState.
// Open it up, change the starting value or the buttons, and watch the
// card in the preview react instantly.

import { useState } from 'react'

export default function Counter() {
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
