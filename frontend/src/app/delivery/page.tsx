import MainLayout from '../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import orderDummy from '../../constans/orderDummy'
import StepsChart from '../../components/stepsChart/StepsChart'
import DeliveryView from '../../components/deliveryPage/DeliveryView'

export const metadata: Metadata = {
    title: 'NeXtPC - Checkout',
    description: 'neXtPC app homepage',
}

const DeliveryPage = () => {
    return (
        <MainLayout>
            <StepsChart step="delivery" />
            <DeliveryView order={orderDummy} />
        </MainLayout>
    )
}

export default DeliveryPage
