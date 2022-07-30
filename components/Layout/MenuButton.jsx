export default function MenuButton({ icon, className, onClick, ...rest }) {
    return (
        <button {...rest} onClick={onClick} className={`text-white hover:text-opacity-80 transition-all text-3xl ${className}`}>
            <span>{icon}</span>
        </button>
    )
}
