import MainLayout from '../../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import ConfirmationView from '../../../components/confirmationPage/ConfirmationView'

export const metadata: Metadata = {
    title: 'NeXtPC - Confirmation',
    description: 'neXtPC app homepage',
}

const ConfirmationPage = () => {
    return (
        <MainLayout>
            <ConfirmationView />
        </MainLayout>
    )
}

export default ConfirmationPage
