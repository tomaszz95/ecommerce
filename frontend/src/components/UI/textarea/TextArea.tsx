import styles from './TextArea.module.css'
import InputError from '../inputs/InputError'

type ComponentType = {
    label: string
    id: string
    value: string
    hasError: boolean
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur: () => void
    errorText: string
}

const TextArea = ({ label, id, value, hasError, onChange, onBlur, errorText }: ComponentType) => {
    return (
        <div>
            <textarea
                id={id}
                placeholder={label}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${styles.textarea} ${hasError ? styles.error : ''}`}
            />
            {hasError && <InputError>{errorText}</InputError>}
        </div>
    )
}

export default TextArea
