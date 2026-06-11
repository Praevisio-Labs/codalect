import { useEffect, useRef, useState } from 'react'
import DiceTile from './DiceTile'

const DICE_COUNT = 10
const DIE_SIDES = 6

function rollFace() {
    return Math.floor(Math.random() * DIE_SIDES) + 1
}

function createDie() {
    return {
        id: crypto.randomUUID(),
        face: rollFace(),
        locked: false,
    }
}

function createDiceSet() {
    return Array.from({ length: DICE_COUNT }, createDie)
}

function rollUnlockedDice(dice) {
    return dice.map((die) => (die.locked ? die : { ...die, face: rollFace() }))
}

function hasMatchedAllDice(dice) {
    return (
        dice.length > 0 &&
        dice.every((die) => die.locked) &&
        dice.every((die) => die.face === dice[0].face)
    )
}

export default function App() {
    const [dice, setDice] = useState(() => createDiceSet())
    const [rollCount, setRollCount] = useState(0)
    const newGameButtonRef = useRef(null)

    const gameWon = hasMatchedAllDice(dice)
    const lockedCount = dice.filter((die) => die.locked).length
    const rollLabel = rollCount === 1 ? 'roll' : 'rolls'

    useEffect(() => {
        if (gameWon) {
            newGameButtonRef.current?.focus()
        }
    }, [gameWon])

    function startNewGame() {
        setDice(createDiceSet())
        setRollCount(0)
    }

    function handleRoll() {
        if (gameWon) {
            startNewGame()
            return
        }

        setDice((currentDice) => rollUnlockedDice(currentDice))
        setRollCount((currentCount) => currentCount + 1)
    }

    function toggleDieLock(id) {
        setDice((currentDice) =>
            currentDice.map((die) =>
                die.id === id ? { ...die, locked: !die.locked } : die,
            ),
        )
    }

    return (
        <main className="game-shell">
            <div className="game-header">
                <p className="eyebrow">Codalect dice lab</p>
                <h1>Dice Game</h1>
                <p className="instructions">
                    Roll the dice until every face matches. Lock the dice you
                    want to keep, then roll the rest.
                </p>
            </div>

            <section className="stats" aria-label="Game progress">
                <span>Rolls: {rollCount}</span>
                <span>
                    Locked: {lockedCount}/{DICE_COUNT}
                </span>
            </section>

            <div aria-live="polite" className="sr-only">
                {gameWon && (
                    <p>
                        You matched all dice in {rollCount} {rollLabel}. Start a
                        new round.
                    </p>
                )}
            </div>

            {gameWon && (
                <p className="win-message">
                    Matched in {rollCount} {rollLabel}. Nice work.
                </p>
            )}

            <div className="dice-grid">
                {dice.map((die) => (
                    <DiceTile
                        key={die.id}
                        face={die.face}
                        locked={die.locked}
                        onToggle={() => toggleDieLock(die.id)}
                    />
                ))}
            </div>

            <button
                ref={newGameButtonRef}
                className="primary-action"
                onClick={handleRoll}>
                {gameWon ? 'New Round' : 'Roll Dice'}
            </button>
        </main>
    )
}
