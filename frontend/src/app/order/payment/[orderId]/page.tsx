'use client'

import OrderLayout from '../../../../components/layouts/OrderLayout'
import StepsChart from '../../../../components/stepsChart/StepsChart'
import PaymentView from '../../../../components/paymentPage/PaymentView'

import useMetadata from '../../../../hooks/useMetadata'
import { useGetOrderData } from '../../../../hooks/useGetOrderData'

type Props = {
    params: { orderId: string }
}

const SummaryPage = ({ params }: Props) => {
    useMetadata({ title: 'Payment', description: 'NeXtPC payment page' })
    const { orderData, isLoading, serverError } = useGetOrderData(params.orderId)

    return (
        <OrderLayout isLoading={isLoading} serverError={serverError} orderData={orderData}>
            <StepsChart step="payment" />
            {orderData && <PaymentView order={orderData} />}
        </OrderLayout>
    )
}

export default SummaryPage
