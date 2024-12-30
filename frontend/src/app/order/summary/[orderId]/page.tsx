'use client'

import useMetadata from '../../../../hooks/useMetadata'
import { useGetOrderData } from '../../../../hooks/useGetOrderData'

import OrderLayout from '../../../../components/layouts/OrderLayout'
import StepsChart from '../../../../components/stepsChart/StepsChart'
import SummaryView from '../../../../components/summaryPage/SummaryView'

type Props = {
    params: { orderId: string }
}

const SummaryPage = ({ params }: Props) => {
    useMetadata({ title: 'Summary', description: 'NeXtPC summary page' })
    const { orderData, isLoading, serverError } = useGetOrderData(params.orderId)

    return (
        <OrderLayout isLoading={isLoading} serverError={serverError} orderData={orderData}>
            <StepsChart step="summary" />
            {orderData && <SummaryView order={orderData} />}
        </OrderLayout>
    )
}

export default SummaryPage
