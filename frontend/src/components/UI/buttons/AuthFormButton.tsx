import styles from './AuthFormButton.module.css'

type AuthFormButtonProps = {
    children: React.ReactNode
    formIsValid: boolean
    type: 'button' | 'submit' | 'reset'
}

const AuthFormButton = ({ children, formIsValid, type = 'button' }: AuthFormButtonProps) => {
    return (
        <button type={type} className={styles.authButton} disabled={!formIsValid} aria-label="Click to apply form">
            {children}
        </button>
    )
}

export default AuthFormButton
