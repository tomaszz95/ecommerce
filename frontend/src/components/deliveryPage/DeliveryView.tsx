'use client'

import { useCallback, useState } from 'react'

import OrderSummary from '../orderSummary/OrderSummary'
import DeliveryOptions from './deliveryMethods/DeliveryOptions'
import DeliveryForm from './deliveryForm/DeliveryForm'

import { orderType } from '../../types/types'

import styles from './DeliveryView.module.css'

type ComponentType = {
    order: orderType
}

const DeliveryView = ({ order }: ComponentType) => {
    const [isFormValid, setIsFormValid] = useState(false)
    const [deliveryInputsData, setDeliveryInputsData] = useState({})
    const [selectedMethod, setSelectedMethod] = useState('Courier')
    const [selectedMethodDelivery, setSelectedMethodDelivery] = useState('FeedEx')

    const selectMethodHandler = (value: string) => {
        setSelectedMethod(value)
    }

    const selectMethodDeliveryHandler = (value: string) => {
        setSelectedMethodDelivery(value)
    }

    const handleFormValidationChange = useCallback((isValid: boolean, deliveryData: {}) => {
        setIsFormValid(isValid)
        setDeliveryInputsData(deliveryData)
    }, [])

    const handleSubmit = () => {
        if (isFormValid) {
            console.log(selectedMethod, selectedMethodDelivery, deliveryInputsData)
        } else {
            console.log(selectedMethod, selectedMethodDelivery)
            console.log('Form is invalid. Please complete all fields.')
        }
    }

    return (
        <div className={styles.deliveryPage}>
            <div className={styles.deliveryContainer}>
                <DeliveryOptions
                    onSelectMethod={selectMethodHandler}
                    onSelectMethodDelivery={selectMethodDeliveryHandler}
                    selectedMethod={selectedMethod}
                    selectedMethodDelivery={selectedMethodDelivery}
                />
                <DeliveryForm onFormValidationChange={handleFormValidationChange} />
            </div>
            <OrderSummary
                isFormValid={isFormValid}
                order={order}
                onHandleSubmit={handleSubmit}
                link="/order/payment"
                linkText="payment"
            />
        </div>
    )
}

export default DeliveryView
