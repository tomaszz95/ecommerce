import MainLayout from '../../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import PayedView from '../../../components/payedPage/PayedView'

export const metadata: Metadata = {
    title: 'NeXtPC - Payed',
    description: 'neXtPC app homepage',
}

const ConfirmationPage = () => {
    return (
        <MainLayout>
            <PayedView />
        </MainLayout>
    )
}

export default ConfirmationPage
