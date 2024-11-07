'use client'

import styles from './PaymentView.module.css'
import { orderType } from '../../types/types'
import { useEffect, useState } from 'react'
import OrderSummary from '../orderSummary/OrderSummary'
import PaymentOptions from './paymentOptions/PaymentOptions'

type ComponentType = {
    order: orderType
}

const PaymentView = ({ order }: ComponentType) => {
    const [isFormValid, setIsFormValid] = useState(false)
    const [selectedPayment, setSelectedPayment] = useState('Online payment')
    const [isRegulationsAccept, setIsRegulationsAccept] = useState(false)

    const selectPaymentHandler = (value: string) => {
        setSelectedPayment(value)
    }

    const acceptRegulationsHandler = (value: boolean) => {
        setIsRegulationsAccept(value)
    }

    useEffect(() => {
        if (selectedPayment && isRegulationsAccept) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [selectedPayment, isRegulationsAccept])

    const handleSubmit = () => {
        if (selectedPayment && isRegulationsAccept) {
            console.log(selectedPayment, isRegulationsAccept)
        } else {
            console.log('Form is invalid. Please complete all fields.')
        }
    }

    return (
        <div className={styles.paymentPage}>
            <div className={styles.paymentContainer}>
                <PaymentOptions
                    onSelectPayment={selectPaymentHandler}
                    onAcceptRegulations={acceptRegulationsHandler}
                    selectedPayment={selectedPayment}
                />
            </div>
            <OrderSummary
                isFormValid={isFormValid}
                order={order}
                onHandleSubmit={handleSubmit}
                link="/order/summary"
                linkText="summary"
            />
        </div>
    )
}

export default PaymentView
