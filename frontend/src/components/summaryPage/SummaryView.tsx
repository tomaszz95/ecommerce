'use client'

import SummaryData from './summaryData/SummaryData'
import OrderSummary from '../orderSummary/OrderSummary'

import { orderType } from '../../types/types'

import styles from './SummaryView.module.css'

type ComponentType = {
    order: orderType
}

const SummaryView = ({ order }: ComponentType) => {
    const handleSubmit = () => {
        console.log('Confirmed')
    }

    return (
        <div className={styles.summaryPage}>
            <div className={styles.summaryContainer}>
                <SummaryData order={order} />
            </div>

            <OrderSummary
                isFormValid={true}
                order={order}
                onHandleSubmit={handleSubmit}
                link="/order/confirmation"
                linkText="Buy and pay"
            />
        </div>
    )
}

export default SummaryView
