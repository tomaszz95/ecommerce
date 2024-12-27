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
    return (
        <>
            <section className={styles.section}>
                <SummaryTitle
                    title="Delivery method"
                    link={`/order/delivery/${order._id}`}
                    canEdit={order.status === 'Pending'}
                />
                <SummaryDelivery
                    deliveryMethod={order.delivery.method}
                    deliveryWay={order.delivery.methodWay}
                    isDeliveryChosen={order.delivery.method !== 'Not selected yet'}
                />
            </section>
            <section className={styles.section}>
                <SummaryTitle
                    title="Delivery address"
                    link={`/order/delivery/${order._id}`}
                    canEdit={order.status === 'Pending'}
                />
                <SummaryAddress
                    summaryAddress={order.delivery.informations}
                    singleOrder={singleOrder}
                    isAddressChosen={order.delivery.informations.address !== ''}
                />
            </section>
            <section className={styles.section}>
                <SummaryTitle
                    title="Payment method"
                    link={`/order/payment/${order._id}`}
                    canEdit={
                        order.status === 'Pending' &&
                        order.delivery.method !== 'Not selected yet' &&
                        order.payment !== 'Not selected yet'
                    }
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
