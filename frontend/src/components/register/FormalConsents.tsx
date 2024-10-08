import { useState, useEffect } from 'react'
import styles from './FormalConsents.module.css'

type ComponentType = {
    onConsentsAgree: (isAgreed: boolean) => void
    isConsentError: boolean
}

const FormalConsents = ({ onConsentsAgree, isConsentError }: ComponentType) => {
    const [acceptRegulations, setAcceptRegulations] = useState(false)
    const [receiveOffers, setReceiveOffers] = useState(false)
    const [tailoredOffers, setTailoredOffers] = useState(false)

    useEffect(() => {
        if (acceptRegulations) {
            onConsentsAgree(true)
        } else {
            onConsentsAgree(false)
        }
    }, [acceptRegulations, receiveOffers, tailoredOffers, onConsentsAgree])

    const handleAcceptRegulationsChange = (checked: boolean) => {
        setAcceptRegulations(checked)
    }

    const handleReceiveOffersChange = (checked: boolean) => {
        setReceiveOffers(checked)
    }

    const handleTailoredOffersChange = (checked: boolean) => {
        setTailoredOffers(checked)
    }

    return (
        <div className={styles.consentContainer}>
            <div className={`${styles.consentBox} ${isConsentError ? styles.error : ''}`}>
                <div>
                    <input
                        id="acceptRegulations"
                        type="checkbox"
                        checked={acceptRegulations}
                        onChange={(e) => handleAcceptRegulationsChange(e.target.checked)}
                    />
                </div>
                <label htmlFor="acceptRegulations">I accept the store regulations (required)</label>
            </div>

            <div className={styles.consentBox}>
                <div>
                    <input
                        id="receiveOffers"
                        type="checkbox"
                        checked={receiveOffers}
                        onChange={(e) => handleReceiveOffersChange(e.target.checked)}
                    />
                </div>
                <label htmlFor="receiveOffers">
                    I want to receive information about current offers and promotions by e-mail
                </label>
            </div>

            <div className={styles.consentBox}>
                <div>
                    <input
                        id="tailoredOffers"
                        type="checkbox"
                        checked={tailoredOffers}
                        onChange={(e) => handleTailoredOffersChange(e.target.checked)}
                    />
                </div>
                <label htmlFor="tailoredOffers">I want to receive an offer tailored to my needs</label>
            </div>
        </div>
    )
}

export default FormalConsents
