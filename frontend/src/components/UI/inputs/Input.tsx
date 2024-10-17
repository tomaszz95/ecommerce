import styles from './Input.module.css'
import InputError from './InputError'

type ComponentType = {
    label: string
    id: string
    type?: string
    value: string
    hasError: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: () => void
    errorText: string
}

const Input = ({ label, id, type = 'text', value, hasError, onChange, onBlur, errorText }: ComponentType) => {
    return (
        <div>
            <input
                id={id}
                placeholder={label}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${styles.input} ${hasError ? styles.error : ''}`}
            />
            {hasError && <InputError>{errorText}</InputError>}
        </div>
    )
}

export default Input
