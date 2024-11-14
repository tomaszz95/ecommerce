import HightlightButton from '../UI/buttons/HightlightButton'

import styles from './PayedView.module.css'

const PayedView = () => {
    return (
        <section className={styles.payedSection}>
            <div className={styles.payedContainer}>
                <h2>Thank you for your payment</h2>
                <p>Your payment has been accepted. </p>
                <p>The next step is to pack the product and ship it to you.</p>
                <p className={styles.payedInfo}>
                    (This page is only a preview page, payment and redirection itself has not been created).
                </p>
                <HightlightButton href="/">Go back</HightlightButton>
            </div>
        </section>
    )
}

export default PayedView
