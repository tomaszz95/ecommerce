import Link from 'next/link'

import styles from './BuyAsGuest.module.css'

type ComponentType = {
    orderId?: string
}

const BuyAsGuest = ({ orderId }: ComponentType) => {
    return (
        <section className={styles.buyAsGuestSection}>
            <h2>Continue without logging in</h2>
            <p>
                If you do not log in, you will not have access to your order history and discounts that we have prepared
                for you.
            </p>
            <Link href={`/order/delivery/${orderId}`} aria-label="Go to delivery page">
                Continue as a guest
            </Link>
        </section>
    )
}

export default BuyAsGuest
