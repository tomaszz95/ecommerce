'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'

import Modal from '../UI/Modal/Modal'

import { API_URL, FRONTEND_URL } from '../../constans/url'

import styles from './ConfirmationView.module.css'

type ComponentType = {
    orderId: string
}

const ConfirmationView = ({ orderId }: ComponentType) => {
    const router = useRouter()
    const [serverError, setServerError] = useState('')

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${API_URL}/api/orders/paid/${orderId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderId: orderId,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                setServerError(errorData.msg)
                return
            }

            localStorage.removeItem('orderId')

            router.push(`${FRONTEND_URL}/order/paid`)
        } catch (err: any) {
            setServerError(err.message)
        }
    }

    return (
        <section className={styles.confirmationSection}>
            <div className={styles.confirmationContainer}>
                <h2>Thank you for placing your order</h2>
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

                <button onClick={handleSubmit} className={styles.nextButton}>
                    Pay for order
                </button>
            </div>

            {serverError !== '' && (
                <Modal isVisible={serverError !== ''} onAnimationEnd={() => setServerError('')}>
                    {serverError}
                </Modal>
            )}
        </section>
    )
}

export default ConfirmationView
