import styles from './AuthFormButton.module.css'

type AuthFormButtonProps = {
    children: React.ReactNode
    formIsValid: boolean
    type: 'button' | 'submit' | 'reset'
}

const AuthFormButton = ({ children, formIsValid, type }: AuthFormButtonProps) => {
    return (
        <button type={type} className={styles.authButton} disabled={!formIsValid}>
            {children}
        </button>
    )
}

export default AuthFormButton
