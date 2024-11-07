import styles from './SummaryData.module.css'

import { orderType } from '../../../types/types'

import SummaryDelivery from './SummaryDelivery'
import SummaryAddress from './SummaryAddress'
import SummaryPayment from './SummaryPayment'
import SummaryTitle from './SummaryTitle'
import SummaryComment from './SummaryComment'

type ComponentType = {
    order: orderType
}

const SummaryData = ({ order }: ComponentType) => {
    return (
        <>
            <section className={styles.section}>
                <SummaryTitle title="Delivery method" link="/order/delivery" />
                <SummaryDelivery deliveryMethod={order.delivery.method} deliveryWay={order.delivery.methodWay} />
            </section>
            <section className={styles.section}>
                <SummaryTitle title="Delivery address" link="/order/delivery" />
                <SummaryAddress summaryAddress={order.delivery.informations} />
            </section>
            <section className={styles.section}>
                <SummaryTitle title="Payment method" link="/order/payment" />
                <SummaryPayment payment={order.payment} />
            </section>
            <section className={`${styles.sectionComment} ${styles.section}`}>
                <SummaryComment />
            </section>
        </>
    )
}

export default SummaryData
