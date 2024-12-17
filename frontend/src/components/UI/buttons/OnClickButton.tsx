import styles from './OnClickButton.module.css'

type ComponentType = {
    onClick: ((event: React.FormEvent<Element>) => void) | (() => void)
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

const OnClickButton = ({ onClick, children, type = 'button', disabled = true }: ComponentType) => {
    return (
        <button
            className={`${styles.button} ${disabled ? styles.disabled : ''}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default OnClickButton
