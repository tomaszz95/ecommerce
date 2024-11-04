import { orderType } from '../../types/types'
import DeliveryPayment from './deliveryInfo/DeliveryPayment'
import DeliveryAgreements from './deliveryInfo/DeliveryAgreements'
import DeliverySummary from './deliverySummary/DeliverySummary'

import styles from './DeliveryView.module.css'
import DeliveryOptions from './deliveryOptions/DeliveryOptions'

type ComponentType = {
    order: orderType
}

const DeliveryView = ({ order }: ComponentType) => {
    return (
        <div className={styles.deliveryPage}>
            <div className={styles.deliveryContainer}>
                <DeliveryOptions />
                <DeliveryPayment />
                <DeliveryAgreements />
            </div>
            <DeliverySummary />
        </div>
    )
}

export default DeliveryView
