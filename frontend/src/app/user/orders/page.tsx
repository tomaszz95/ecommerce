import OrdersView from '../../../components/userOrdersPage/OrdersView'
import MainLayout from '../../../components/layouts/MainLayout'
import ordersDummy from '../../../constans/ordersDummy'

const UserOrdersPage = () => {
    return (
        <MainLayout>
            <OrdersView orders={ordersDummy} />
        </MainLayout>
    )
}

export default UserOrdersPage
