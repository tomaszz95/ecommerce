import Link from 'next/link'
import styles from './ConfirmationView.module.css'

const ConfirmationView = () => {
    return (
        <section className={styles.confirmationSection}>
            <div className={styles.confirmationContainer}>
                <h2>Thank you for placing your order</h2>
                <p>
                    To pay for your order, click on the&nbsp;<Link href="/order/payed">highlighted link.</Link>
                </p>
                <p>
                    You will receive an email with your order details shortly. You can also check your orders&nbsp;
                    <Link href="/user/orders">at this link.</Link>
                </p>

                <p>We will inform you about changes in the order status by e-mail.</p>
                <p>
                    If you have any questions or doubts, please contact us by&nbsp;
                    <Link href="/contact">phone or e-mail.</Link>
                </p>
                <Link href="/" className={styles.backButton}>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default ConfirmationView
