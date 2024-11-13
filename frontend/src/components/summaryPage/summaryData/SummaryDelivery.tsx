import TruckIcon from '../../../assets/icons/truck.svg'
import ShopIcon from '../../../assets/icons/shop.svg'

import Image from 'next/image'

import styles from './SummaryDelivery.module.css'

type ComponentType = {
    deliveryMethod: string
    deliveryWay: string
    isDeliveryChosen: boolean
}

const SummaryDelivery = ({ deliveryMethod, deliveryWay, isDeliveryChosen }: ComponentType) => {
    const deliveryIcon = deliveryMethod === 'Courier' ? TruckIcon : ShopIcon

    return (
        <div className={styles.deliverySection}>
            <div className={styles.deliveryText}>
                {isDeliveryChosen ? (
                    <>
                        <b>{deliveryMethod} -</b>
                        <span>{deliveryWay}</span>
                    </>
                ) : (
                    <b>Not selected yet</b>
                )}
            </div>
            {isDeliveryChosen && (
                <div className={styles.deliveryInfo}>
                    {deliveryIcon && <Image src={deliveryIcon} alt="" />}
                    <span>$0</span>
                </div>
            )}
        </div>
    )
}

export default SummaryDelivery
