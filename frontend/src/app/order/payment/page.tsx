import MainLayout from '../../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import orderDummy from '../../../constans/orderDummy'
import StepsChart from '../../../components/stepsChart/StepsChart'
import PaymentView from '../../../components/paymentPage/PaymentView'

export const metadata: Metadata = {
    title: 'NeXtPC - Payment',
    description: 'neXtPC app homepage',
}

const PaymentPage = () => {
    return (
        <MainLayout>
            <StepsChart step="payment" />
            <PaymentView order={orderDummy} />
        </MainLayout>
    )
}

export default PaymentPage
