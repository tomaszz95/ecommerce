import SingleOrderView from '../../../../components/userSingleOrderPage/SingleOrderView'
import MainLayout from '../../../../components/layouts/MainLayout'
import ordersDummy from '../../../../constans/ordersDummy'
import { notFound } from 'next/navigation'

type Props = {
    params: { orderId: string }
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
