import TruckIcon from '../../../assets/icons/truck.svg'
import ShopIcon from '../../../assets/icons/shop.svg'

import Image from 'next/image'

import styles from './SummaryDelivery.module.css'

type ComponentType = {
    deliveryMethod: string
    deliveryWay: string
}

const SummaryDelivery = ({ deliveryMethod, deliveryWay }: ComponentType) => {
    const deliveryIcon = deliveryMethod === 'Courier' ? TruckIcon : ShopIcon

    return (
        <div className={styles.deliverySection}>
            <div className={styles.deliveryText}>
                <b>{deliveryMethod} -</b> <span>{deliveryWay}</span>
            </div>
            <div className={styles.deliveryInfo}>
                <Image src={deliveryIcon} alt="" />
                <span>$0</span>
            </div>
        </div>
    )
}

export default SummaryDelivery
