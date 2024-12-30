'use client'

import useMetadata from '../../../../hooks/useMetadata'
import { useGetOrderData } from '../../../../hooks/useGetOrderData'

import OrderLayout from '../../../../components/layouts/OrderLayout'
import StepsChart from '../../../../components/stepsChart/StepsChart'
import DeliveryView from '../../../../components/deliveryPage/DeliveryView'

type Props = {
    params: { orderId: string }
}

const DeliveryPage = ({ params }: Props) => {
    useMetadata({ title: 'Delivery', description: 'NeXtPC delivery page' })
    const { orderData, isLoading, serverError } = useGetOrderData(params.orderId)

    return (
        <OrderLayout isLoading={isLoading} serverError={serverError} orderData={orderData}>
            <StepsChart step="delivery" />
            {orderData && <DeliveryView order={orderData} />}
        </OrderLayout>
    )
}

export default DeliveryPage
