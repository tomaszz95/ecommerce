import MainLayout from '../../components/layouts/MainLayout'
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner'
import ServerError from '../../components/serverError/ServerError'

import { singleOrderType } from '../../types/types'

type PageWrapperProps = {
    isLoading: boolean
    serverError: string
    orderData: singleOrderType | null
    children: React.ReactNode
}

const OrderLayout = ({ isLoading, serverError, orderData, children }: PageWrapperProps) => {
    if (isLoading) {
        return (
            <MainLayout>
                <LoadingSpinner />
            </MainLayout>
        )
    }

    if (serverError || orderData === null) {
        return (
            <MainLayout>
                <ServerError errorText={serverError} errorMsg="Please try again later" />
            </MainLayout>
        )
    }
    return <MainLayout>{children}</MainLayout>
}

export default OrderLayout
