import Link from 'next/link'
import styles from './BuyAsGuest.module.css'

const BuyAsGuest = () => {
    return (
        <section className={styles.buyAsGuestSection}>
            <h2>Continue without logging in</h2>
            <p>
                If you do not log in, you will not have access to your order history and discounts that we have prepared
                for you.
            </p>
            <Link href="/delivery">Continue as a guest</Link>
        </section>
    )
}

export default BuyAsGuest
