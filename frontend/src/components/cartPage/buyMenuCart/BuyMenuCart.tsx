import { useState, useEffect } from 'react'

import HightlightButton from '../../../components/UI/buttons/HightlightButton'
import PromotionCode from './PromotionCode'

import { API_URL } from '../../../constans/url'

import styles from './BuyMenuCart.module.css'

type ComponentType = {
    totalPrice: number
    subtotalPrice: number
    discount: number
    discountValue: number
    orderId: string
}

const BuyMenuCart = ({ totalPrice, subtotalPrice, discount, discountValue, orderId }: ComponentType) => {
    const [promoInput, setPromoInput] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [linkPath, setLinkPath] = useState(`/order/login-or-register/${orderId}`)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/api/auth/isLogged`, {
                    method: 'GET',
                    credentials: 'include',
                })

                const data = await response.json()

                if (data.message === 'User') {
                    setLinkPath(`/order/delivery/${orderId}`)
                } else {
                    setLinkPath(`/order/login-or-register/${orderId}`)
                }
            } catch (error) {
                setLinkPath(`/order/login-or-register/${orderId}`)
            }
        }

        checkAuth()
    }, [])

    const promoCodeHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/api/orders/checkPromoCode`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    promoCode: promoInput,
                    orderId: orderId,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                throw new Error(errorData.msg || 'This promo code is not a valid one')
            }

            const data = await response.json()

            if (data.msg === 'Promo code is invalid') {
                return setIsValid(false)
            }

            setIsValid(true)

            window.location.reload()
        } catch (err: any) {
            setIsValid(false)
        }
    }

    return (
        <section className={styles.buyMenuSection}>
            <PromotionCode
                onPromoCodeHandler={promoCodeHandler}
                promoInput={promoInput}
                setPromoInput={setPromoInput}
                isValid={isValid}
                discountValue={discountValue}
            />
            <div className={styles.priceBox}>
                <span>Products value:</span>
                <b>${subtotalPrice}</b>
            </div>
            {discountValue > 0 && (
                <div className={styles.priceBox}>
                    <span>Discount from code:</span>
                    <b>-${discount}</b>
                </div>
            )}
            <div className={styles.priceBox}>
                <span>Delivery:</span>
                <b>$0</b>
            </div>
            <div className={`${styles.priceBox} ${styles.totalPrice}`}>
                <span>Total price:</span>
                <b>${totalPrice}</b>
            </div>
            <HightlightButton href={linkPath}>Go to delivery</HightlightButton>
            <p className={styles.priceBoxInfo}>Don't delay, the products in your cart are not reserved.</p>
        </section>
    )
}

export default BuyMenuCart
