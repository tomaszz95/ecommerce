import type { Metadata } from 'next'

import MainLayout from '../../../../components/layouts/MainLayout'
import ConfirmationView from '../../../../components/confirmationPage/ConfirmationView'

export const metadata: Metadata = {
    title: 'NeXtPC - Confirmation',
    description: 'NeXtPC confirmation page',
}

type Props = {
    params: { orderId: string }
}

const ConfirmationPage = ({ params }: Props) => {
    return (
        <MainLayout>
            <ConfirmationView orderId={params.orderId} />
        </MainLayout>
    )
}

export default ConfirmationPage
