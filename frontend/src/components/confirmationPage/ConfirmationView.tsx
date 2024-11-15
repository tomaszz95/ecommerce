import Link from 'next/link'

import HightlightButton from '../UI/buttons/HightlightButton'

import styles from './ConfirmationView.module.css'

const ConfirmationView = () => {
    return (
        <section className={styles.confirmationSection}>
            <div className={styles.confirmationContainer}>
                <h2>Thank you for placing your order</h2>
                <p>
                    To pay for your order, click on the&nbsp;
                    <Link href="/order/payed" aria-label="Pay for order" className={styles.confirmationLink}>
                        highlighted link.
                    </Link>
                </p>
                <p>You will receive an email with your order details shortly.</p>
                <p>
                    If you are logged in you can also check your orders&nbsp;
                    <Link href="/user/orders" aria-label="Go to orders" className={styles.confirmationLink}>
                        at this link.
                    </Link>
                </p>
                <p>We will inform you about changes in the order status by e-mail.</p>
                <p>
                    If you have any questions or doubts, please contact us by&nbsp;
                    <Link href="/contact" aria-label="Go to contact page" className={styles.confirmationLink}>
                        phone or e-mail.
                    </Link>
                </p>
                <HightlightButton href="/">Go back</HightlightButton>
            </div>
        </section>
    )
}

export default ConfirmationView
