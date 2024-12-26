import Image from 'next/image'

import { useState } from 'react'

import Modal from '../../../../components/UI/Modal/Modal'

import { API_URL } from '../../../../constans/url'

import styles from './OrderCartInfo.module.css'

type ComponentType = {
    name: string
    image: string
    amount: number
    orderId: string
    productId: string
}

const OrderCartInfo = ({ name, image, amount, orderId, productId }: ComponentType) => {
    const [serverError, setServerError] = useState(false)

    const updateItemCountHandler = async (type: 'increase' | 'decrease') => {
        try {
            const response = await fetch(`${API_URL}/api/orders/updateAmount`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderId,
                    productId,
                    amountType: type,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                throw new Error(errorData.msg || 'Failed to update product quantity.')
            }

            window.location.reload()
        } catch (err) {
            setServerError(true)
        }
    }

    return (
        <div className={styles.orderItemInfo}>
            <div className={styles.orderItemInfoText}>
                <Image src={`${API_URL}/photos/${image}`} width={1000} height={1000} alt={name} />
                <h3>{name}</h3>
            </div>
            <div className={styles.orderItemInfoCount}>
                <button
                    onClick={() => updateItemCountHandler('decrease')}
                    aria-label="Decrease item count"
                    disabled={amount === 1}
                >
                    -
                </button>
                <input value={amount} readOnly />
                <button onClick={() => updateItemCountHandler('increase')} aria-label="Increase item count">
                    +
                </button>
            </div>
            {serverError && <Modal isVisible={serverError}>Something went wrong. Please try again later.</Modal>}
        </div>
    )
}

export default OrderCartInfo
