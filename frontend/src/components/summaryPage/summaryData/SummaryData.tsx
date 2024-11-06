import styles from './SummaryData.module.css'

import { orderType } from '../../../types/types'

import SummaryDelivery from './SummaryDelivery'

type ComponentType = {
    order: orderType
}

const SummaryData = ({ order }: ComponentType) => {
    return (
        <>
            <section className={styles.section}>
                <h2>Delivery method</h2>
                <SummaryDelivery deliveryMethod={order.delivery.method} deliveryWay={order.delivery.methodWay} />
            </section>
        </>
    )
}

export default SummaryData
