'use client'

import SummaryDelivery from './SummaryDelivery'
import SummaryAddress from './SummaryAddress'
import SummaryPayment from './SummaryPayment'
import SummaryTitle from './SummaryTitle'
import SummaryComment from './SummaryComment'

import { singleOrderType } from '../../../types/types'

import styles from './SummaryData.module.css'

type ComponentType = {
    order: singleOrderType
    singleOrder?: boolean
}

const SummaryData = ({ order, singleOrder = false }: ComponentType) => {
    const isDeliveryChosen = order.delivery.method !== '' && order.delivery.methodWay !== ''
    const isAddressChosen = order.delivery.informations.address !== ''

    return (
        <>
            <section className={styles.section}>
                <SummaryTitle title="Delivery method" link="/order/delivery" canEdit={order.status === 'Pending'} />
                <SummaryDelivery
                    deliveryMethod={order.delivery.method}
                    deliveryWay={order.delivery.methodWay}
                    isDeliveryChosen={isDeliveryChosen}
                />
            </section>
            <section className={styles.section}>
                <SummaryTitle title="Delivery address" link="/order/delivery" canEdit={order.status === 'Pending'} />
                <SummaryAddress
                    summaryAddress={order.delivery.informations}
                    singleOrder={singleOrder}
                    isAddressChosen={isAddressChosen}
                />
            </section>
            <section className={styles.section}>
                <SummaryTitle
                    title="Payment method"
                    link="/order/payment"
                    canEdit={order.status === 'Pending' && isDeliveryChosen && isAddressChosen}
                />
                <SummaryPayment payment={order.payment} />
            </section>
            {!singleOrder && (
                <section className={`${styles.sectionComment} ${styles.section}`}>
                    <SummaryComment />
                </section>
            )}
        </>
    )
}

export default SummaryData
