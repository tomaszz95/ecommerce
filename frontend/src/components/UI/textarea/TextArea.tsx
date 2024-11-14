import InputError from '../inputs/InputError'

import styles from './TextArea.module.css'

type ComponentType = {
    label: string
    id: string
    value: string
    hasError?: boolean
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: () => void
    errorText?: string
    maxLength?: number
}

const TextArea = ({ label, id, value, hasError, onChange, onBlur, errorText, maxLength }: ComponentType) => {
    return (
        <div>
            <textarea
                maxLength={maxLength}
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
