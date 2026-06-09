export default function DiceTile({ face, locked, onToggle }) {
    return (
        <button
            className={locked ? 'die-tile die-tile-locked' : 'die-tile'}
            onClick={onToggle}
            aria-pressed={locked}
            aria-label={`Die showing ${face}, ${locked ? 'locked' : 'unlocked'}`}>
            {face}
        </button>
    )
}
