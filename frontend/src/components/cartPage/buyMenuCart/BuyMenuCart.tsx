'use client'

import { useState, useEffect } from 'react'

import HightlightButton from '../../../components/UI/buttons/HightlightButton'
import PromotionCode from './PromotionCode'

import promoCodes from '../../../constans/promoCodes'

import styles from './BuyMenuCart.module.css'

type ComponentType = {
    totalPrice: number
}

const BuyMenuCart = ({ totalPrice }: ComponentType) => {
    const [promoInput, setPromoInput] = useState('')
    const [discount, setDiscount] = useState(0)
    const [isValid, setIsValid] = useState(true)
    const [linkPath, setLinkPath] = useState('/order/login-or-register')

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin')

        if (isLogin === 'true') {
            setLinkPath('/order/delivery')
        }
    }, [])

    const promoCodeHandler = () => {
        const promo = promoCodes.find((code) => code.name.toLowerCase() === promoInput.toLowerCase())

        if (promo) {
            const discountAmount = (totalPrice * promo.value) / 100
            setDiscount(discountAmount)
            setIsValid(true)
        } else {
            setDiscount(0)
            setIsValid(false)
        }
    }

    const finalPrice = totalPrice - discount

    return (
        <section className={styles.buyMenuSection}>
            <PromotionCode
                onPromoCodeHandler={promoCodeHandler}
                promoInput={promoInput}
                setPromoInput={setPromoInput}
                isValid={isValid}
                discount={discount}
            />
            {discount > 0 && (
                <div className={styles.priceBox}>
                    <span>Code applied:</span>
                    <b>${discount.toFixed(0)}</b>
                </div>
            )}
            <div className={styles.priceBox}>
                <span>Products value:</span>
                <b>${totalPrice}</b>
            </div>
            <div className={styles.priceBox}>
                <span>Delivery:</span>
                <b>$0</b>
            </div>
            <div className={`${styles.priceBox} ${styles.totalPrice}`}>
                <span>Total price:</span>
                <b>${finalPrice.toFixed(0)}</b>
            </div>
            <HightlightButton href={linkPath}>Go to delivery</HightlightButton>
            <p className={styles.priceBoxInfo}>Don't delay, the products in your cart are not reserved.</p>
        </section>
    )
}

export default BuyMenuCart
