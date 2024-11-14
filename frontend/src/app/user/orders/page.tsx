import type { Metadata } from 'next'

import MainLayout from '../../../components/layouts/MainLayout'
import OrdersView from '../../../components/userOrdersPage/OrdersView'

import ordersDummy from '../../../constans/ordersDummy'

export const metadata: Metadata = {
    title: 'NeXtPC - User orders',
    description: 'neXtPC app homepage',
}

const UserOrdersPage = () => {
    return (
        <MainLayout>
            <OrdersView orders={ordersDummy} />
        </MainLayout>
    )
}

export default UserOrdersPage
