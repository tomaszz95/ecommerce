import { useState, useEffect } from 'react'

import FormalConsentItem from './FormalConsentItem'

import styles from './FormalConsents.module.css'

type ComponentType = {
    onConsentsAgree: (isAgreed: boolean) => void
}

const FormalConsents = ({ onConsentsAgree }: ComponentType) => {
    const [acceptRegulations, setAcceptRegulations] = useState(false)
    const [receiveOffers, setReceiveOffers] = useState(false)
    const [tailoredOffers, setTailoredOffers] = useState(false)

    useEffect(() => {
        onConsentsAgree(acceptRegulations)
    }, [acceptRegulations, onConsentsAgree])

    const isConsentError = !acceptRegulations

    return (
        <div className={styles.consentContainer}>
            <FormalConsentItem
                id="acceptRegulations"
                label="I accept the store regulations (required)"
                checked={acceptRegulations}
                onChange={setAcceptRegulations}
                isError={isConsentError}
            />

            <FormalConsentItem
                id="receiveOffers"
                label="I want to receive information about current offers and promotions by e-mail"
                checked={receiveOffers}
                onChange={setReceiveOffers}
            />

            <FormalConsentItem
                id="tailoredOffers"
                label="I want to receive an offer tailored to my needs"
                checked={tailoredOffers}
                onChange={setTailoredOffers}
            />
        </div>
    )
}

export default FormalConsents
