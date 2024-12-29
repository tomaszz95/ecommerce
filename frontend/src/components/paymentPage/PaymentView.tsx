'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import OrderSummary from '../orderSummary/OrderSummary'
import PaymentOptions from './paymentOptions/PaymentOptions'
import Modal from '../UI/Modal/Modal'

import { API_URL, FRONTEND_URL } from '../../constans/url'

import { singleOrderType } from '../../types/types'

import styles from './PaymentView.module.css'

type ComponentType = {
    order: singleOrderType
}

const PaymentView = ({ order }: ComponentType) => {
    const router = useRouter()
    const [isFormValid, setIsFormValid] = useState(false)
    const [selectedPayment, setSelectedPayment] = useState(order.payment)
    const [isRegulationsAccept, setIsRegulationsAccept] = useState(false)
    const [serverError, setServerError] = useState('')

    const selectPaymentHandler = (value: string) => {
        setSelectedPayment(value)
    }

    const acceptRegulationsHandler = (value: boolean) => {
        setIsRegulationsAccept(value)
    }

    useEffect(() => {
        if (selectedPayment !== 'Not selected yet' && isRegulationsAccept) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [selectedPayment, isRegulationsAccept])

    const handleSubmit = async () => {
        if (isFormValid) {
            try {
                const response = await fetch(`${API_URL}/api/orders/payment/${order._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        payment: selectedPayment,
                    }),
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()

                    setServerError(errorData.msg)
                    return
                }

                router.push(`${FRONTEND_URL}/order/summary/${order._id}`)
            } catch (err: any) {
                setServerError(err.message)
            }
        } else {
            setServerError('Something went wrong. Please try again later.')
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
            <OrderSummary isFormValid={isFormValid} order={order} onHandleSubmit={handleSubmit} linkText="summary" />

            {serverError !== '' && (
                <Modal isVisible={serverError !== ''} onAnimationEnd={() => setServerError('')}>
                    {serverError}
                </Modal>
            )}
        </div>
    )
}

export default PaymentView
