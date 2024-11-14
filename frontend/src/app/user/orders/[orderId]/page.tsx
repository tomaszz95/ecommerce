import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import MainLayout from '../../../../components/layouts/MainLayout'
import SingleOrderView from '../../../../components/userSingleOrderPage/SingleOrderView'

import ordersDummy from '../../../../constans/ordersDummy'

type Props = {
    params: { orderId: string }
}

export const metadata: Metadata = {
    title: 'NeXtPC - Order',
    description: 'neXtPC app homepage',
}

const UserSingleOrderPage = ({ params }: Props) => {
    const orderId = params.orderId

    const order = ordersDummy.find((order) => order.orderId === orderId)

    if (!order) {
        notFound()
    }

    return (
        <MainLayout>
            <SingleOrderView order={order} />
        </MainLayout>
    )
}

export default UserSingleOrderPage
