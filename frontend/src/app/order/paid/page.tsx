import MainLayout from '../../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import PaidView from '../../../components/paidPage/PaidView'

export const metadata: Metadata = {
    title: 'NeXtPC - Paid',
    description: 'neXtPC paid page',
}

const PaidPage = () => {
    return (
        <MainLayout>
            <PaidView />
        </MainLayout>
    )
}

export default PaidPage
