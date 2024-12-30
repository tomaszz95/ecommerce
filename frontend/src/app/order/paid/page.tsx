import type { Metadata } from 'next'

import MainLayout from '../../../components/layouts/MainLayout'
import PaidView from '../../../components/paidPage/PaidView'

export const metadata: Metadata = {
    title: 'NeXtPC - Paid',
    description: 'NeXtPC paid page',
}

const PaidPage = () => {
    return (
        <MainLayout>
            <PaidView />
        </MainLayout>
    )
}

export default PaidPage
