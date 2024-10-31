import MainLayout from '../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import StepsChart from '../../components/stepsChart/StepsChart'

export const metadata: Metadata = {
    title: 'NeXtPC - Checkout',
    description: 'neXtPC app homepage',
}

const CheckoutPage = () => {
    return (
        <MainLayout>
            <StepsChart step="checkout" />
        </MainLayout>
    )
}

export default CheckoutPage
