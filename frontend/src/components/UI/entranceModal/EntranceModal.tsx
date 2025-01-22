'use client'

import { useState, useEffect } from 'react'

import styles from './EntranceModal.module.css'

const EntranceModal = () => {
    const [isVisible, setIsVisible] = useState(false)
    const modalDisplayTime = 30000
    const localStorageKey = 'hasSeenEntranceModal'

    const closeModal = () => {
        setIsVisible(false)

        localStorage.setItem(localStorageKey, 'true')
    }

    useEffect(() => {
        const hasSeenModal = localStorage.getItem(localStorageKey)

        if (!hasSeenModal) {
            setIsVisible(true)

            const timer = setTimeout(() => {
                setIsVisible(false)
                localStorage.setItem(localStorageKey, 'true')
            }, modalDisplayTime)

            return () => clearTimeout(timer)
        }
    }, [])

    return isVisible ? (
        <div className={`${styles.modal} ${styles.visible}`}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close information modal">
                X
            </button>
            <span>Important Notice!</span>
            <p>Thank you for visiting my site! </p>
            <p>
                Please note that the backend is hosted on a free server, which may take up to 30 seconds to start. As a
                result, photos and data might take a moment to load. I apologize for the inconvenience—this issue is
                solely due to the limitations of free hosting. In a production environment, this delay would not occur.
            </p>
            <p>Thank you for your patience!</p>
        </div>
    ) : null
}

export default EntranceModal
