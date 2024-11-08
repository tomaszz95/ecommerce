import Link from 'next/link'
import styles from './PayedView.module.css'

const PayedView = () => {
    return (
        <section className={styles.payedSection}>
            <div className={styles.payedContainer}>
                <h2>Thank you for your payment</h2>
                <p>Your payment has been accepted. </p>
                <p>The next step is to pack the product and ship it to you.</p>
                <p className={styles.payedInfo}>(This page is only a preview page, payment and redirection itself has not been created).</p>
                <Link href="/" className={styles.backButton}>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default PayedView
