import styles from './OnClickButton.module.css'

type ComponentType = {
    onClick: () => void
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
}

const OnClickButton = ({ onClick, children, type = 'button' }: ComponentType) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default OnClickButton
