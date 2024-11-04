'use client'

import { useState } from 'react'

import DeliveryData from './DeliveryData'
import DeliveryMethod from './DeliveryMethod'

const DeliveryOptions = () => {
    const [selectedMethod, setSelectedMethod] = useState('Courier')
    const [selectedMethodDelivery, setSelectedMethodDelivery] = useState('FedEx')

    const selectMethodHandler = (value: string) => {
        setSelectedMethod(value)
    }

    const selectMethodDeliveryHandler = (value: string) => {
        setSelectedMethodDelivery(value)
    }

    return (
        <>
            <DeliveryMethod onSelectMethod={selectMethodHandler} selectedMethod={selectedMethod} />
            <DeliveryData
                selectedMethod={selectedMethod}
                selectedMethodDelivery={selectedMethodDelivery}
                onSelectMethodDelivery={selectMethodDeliveryHandler}
            />
        </>
    )
}

export default DeliveryOptions
