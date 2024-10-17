import { useState } from 'react'
import styles from './FormalConsentItem.module.css'

type ComponentType = {
    id: string
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
    isError?: boolean
}

const FormalConsentItem = ({ id, label, checked, onChange, isError = false }: ComponentType) => {
    const [isTouched, setIsTouched] = useState(false)

    const handleBlur = () => {
        setIsTouched(true)
    }

    return (
        <div className={`${styles.consentItem} ${isError && isTouched ? styles.error : ''}`}>
            <div>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    onBlur={handleBlur}
                />
            </div>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default FormalConsentItem
