import MainLayout from '../../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import orderDummy from '../../../constans/orderDummy'
import StepsChart from '../../../components/stepsChart/StepsChart'
import SummaryView from '../../../components/summaryPage/SummaryView'

export const metadata: Metadata = {
    title: 'NeXtPC - Payment',
    description: 'neXtPC app homepage',
}

const SummaryPage = () => {
    return (
        <MainLayout>
            <StepsChart step="summary" />
            <SummaryView order={orderDummy} />
        </MainLayout>
    )
}

export default SummaryPage
