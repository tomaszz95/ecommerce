import { useState } from 'react'

import styles from './FormalConsentItem.module.css'

type ComponentType = {
    id: string
    label: string
    checked: boolean
    onClickHandler: (checked: boolean) => void
    isError?: boolean
}

const FormalConsentItem = ({ id, label, checked, onClickHandler, isError = false }: ComponentType) => {
    const [isTouched, setIsTouched] = useState(false)

    const handleBlur = () => {
        setIsTouched(true)
    }

    return (
        <div
            className={`${styles.consentItem} ${isError && isTouched ? styles.error : ''}`}
            onClick={() => (checked ? onClickHandler(false) : onClickHandler(true))}
        >
            <div>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onBlur={handleBlur}
                    aria-label="Accept consents"
                    onChange={() => {}}
                />
            </div>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default FormalConsentItem
