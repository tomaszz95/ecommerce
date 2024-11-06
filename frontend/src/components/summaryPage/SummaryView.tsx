'use client'

import styles from './SummaryView.module.css'
import { orderType } from '../../types/types'
import SummaryData from './summaryData/SummaryData'
import OrderSummary from '../orderSummary/OrderSummary'

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
                linkText="confirmation"
            />
        </div>
    )
}

export default SummaryView
