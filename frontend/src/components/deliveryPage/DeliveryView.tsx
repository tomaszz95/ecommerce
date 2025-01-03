'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

import OrderSummary from '../orderSummary/OrderSummary'
import DeliveryOptions from './deliveryMethods/DeliveryOptions'
import DeliveryForm from './deliveryForm/DeliveryForm'
import Modal from '../UI/modal/Modal'

import { API_URL, FRONTEND_URL } from '../../constans/url'

import { singleOrderType } from '../../types/types'

import styles from './DeliveryView.module.css'

type ComponentType = {
    order: singleOrderType
}

const DeliveryView = ({ order }: ComponentType) => {
    const router = useRouter()
    const [isFormValid, setIsFormValid] = useState(false)
    const [deliveryInputsData, setDeliveryInputsData] = useState({
        enteredCity: order.delivery.informations.city || '',
        enteredEmail: order.delivery.informations.email || '',
        enteredName: order.delivery.informations.name || '',
        enteredPhone: order.delivery.informations.phone || '',
        enteredPostalCode: order.delivery.informations.postalCode || '',
        enteredStreet: order.delivery.informations.address || '',
    })
    const [selectedMethod, setSelectedMethod] = useState(order.delivery.method)
    const [selectedMethodDelivery, setSelectedMethodDelivery] = useState(order.delivery.methodWay)
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
    const [isError, setIsError] = useState(false)

    const selectMethodHandler = (value: string) => {
        setSelectedMethod(value)
    }

    const selectMethodDeliveryHandler = (value: string) => {
        setSelectedMethodDelivery(value)
    }

    const handleFormValidationChange = useCallback(
        (
            isValid: boolean,
            deliveryData: {
                enteredCity: string
                enteredEmail: string
                enteredName: string
                enteredPhone: string
                enteredPostalCode: string
                enteredStreet: string
            },
        ) => {
            setIsFormValid(isValid)
            setDeliveryInputsData(deliveryData)
        },
        [],
    )

    const handleSubmit = async () => {
        if (isFormValid) {
            try {
                const response = await fetch(`${API_URL}/api/orders/delivery/${order._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        method: selectedMethod,
                        methodWay: selectedMethodDelivery,
                        informations: {
                            name: deliveryInputsData.enteredName,
                            address: deliveryInputsData.enteredStreet,
                            postalCode: deliveryInputsData.enteredPostalCode,
                            city: deliveryInputsData.enteredCity,
                            phone: deliveryInputsData.enteredPhone,
                            email: deliveryInputsData.enteredEmail,
                        },
                    }),
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    const fieldErrorsMap: Record<string, string> = {}

                    errorData.msg.split(',').forEach((error: string) => {
                        if (error.includes('address')) fieldErrorsMap.address = 'Invalid address format'
                        if (error.includes('postal code')) fieldErrorsMap.postalCode = 'Invalid postal code format'
                        if (error.includes('phone')) fieldErrorsMap.phone = 'Invalid phone number format'
                        if (error.includes('name')) fieldErrorsMap.name = 'Name must have at least 3 characters'
                        if (error.includes('city')) fieldErrorsMap.city = 'City cannot be empty'
                        if (error.includes('email')) fieldErrorsMap.email = 'Invalid email address'
                    })

                    setFieldErrors(fieldErrorsMap)
                    setIsError(true)
                    return
                }

                setFieldErrors({})

                router.push(`${FRONTEND_URL}/order/payment/${order._id}`)
            } catch (err: unknown) {
                setIsError(true)
            }
        } else {
            setIsError(true)
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
                <DeliveryForm
                    deliveryInputsData={deliveryInputsData}
                    fieldErrors={fieldErrors}
                    onFormValidationChange={handleFormValidationChange}
                />
            </div>

            <OrderSummary isFormValid={isFormValid} order={order} onHandleSubmit={handleSubmit} linkText="payment" />

            {isError && (
                <Modal isVisible={isError} onAnimationEnd={() => setIsError(false)}>
                    {Object.values(fieldErrors).map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </Modal>
            )}
        </div>
    )
}

export default DeliveryView
