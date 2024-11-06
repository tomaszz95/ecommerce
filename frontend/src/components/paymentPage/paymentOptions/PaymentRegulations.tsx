import FormalConsents from '../../../components/registerPage/consents/FormalConsents'

import styles from './PaymentRegulations.module.css'

type ComponentType = {
    onAcceptRegulations: (value: boolean) => void
}

const PaymentRegulations = ({ onAcceptRegulations }: ComponentType) => {
    return (
        <section className={styles.consentSection}>
            <h2>Consents and declarations</h2>
            <FormalConsents onConsentsAgree={onAcceptRegulations} />
        </section>
    )
}

export default PaymentRegulations
