import { orderType } from '../../types/types'
import DeliveryMethod from './deliveryInfo/DeliveryMethod'
import DeliveryData from './deliveryInfo/DeliveryData'
import DeliveryPayment from './deliveryInfo/DeliveryPayment'
import DeliveryAgreements from './deliveryInfo/DeliveryAgreements'
import DeliverySummary from './deliverySummary/DeliverySummary'

import styles from './DeliveryView.module.css'

type ComponentType = {
    order: orderType
}

const DeliveryView = ({ order }: ComponentType) => {
    return (
        <div>
            <div>
                <DeliveryMethod />
                <DeliveryData />
                <DeliveryPayment />
                <DeliveryAgreements />
            </div>
            <DeliverySummary />
        </div>
    )
}

export default DeliveryView
