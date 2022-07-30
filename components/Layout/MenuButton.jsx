export default function MenuButton({ icon, classNames, onClick, ...rest }) {
    return (
        <button {...rest} onClick={onClick} className={`text-white hover:text-opacity-80 transition-all text-3xl ${classNames}`}>
            <span>{icon}</span>
        </button>
    )
}
