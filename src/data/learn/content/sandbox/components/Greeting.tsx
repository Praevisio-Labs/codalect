// Greeting.tsx — takes a `defaultName` prop from its parent (see App.tsx)
// and updates live as you type. Props are how data flows into a component.

import { useState } from 'react'

export default function Greeting({ defaultName }: { defaultName: string }) {
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
