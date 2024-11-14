import Image from 'next/image'

import CartIcon from '../../assets/icons/cart.svg'
import OrderIcon from '../../assets/icons/order.svg'
import StatusIcon from '../../assets/icons/status.svg'
import PromotionIcon from '../../assets/icons/promotion.svg'

import styles from './RegisterBenefits.module.css'

const RegisterBenefits = () => {
    return (
        <div className={styles.benefitsAuthBox}>
            <h3>Why is it worth having an account at neXtPC?</h3>

            <div className={styles.benefitsAuthItems}>
                <Image src={CartIcon} alt="" />
                <p>Fast orders</p>
            </div>
            <div className={styles.benefitsAuthItems}>
                <Image src={OrderIcon} alt="" />
                <p>Check previous orders</p>
            </div>
            <div className={styles.benefitsAuthItems}>
                <Image src={StatusIcon} alt="" />
                <p>Track order status</p>
            </div>
            <div className={styles.benefitsAuthItems}>
                <Image src={PromotionIcon} alt="" />
                <p>Take advantage of discounts</p>
            </div>
        </div>
    )
}

export default RegisterBenefits
