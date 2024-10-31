import MainLayout from '../../components/layouts/MainLayout'
import type { Metadata } from 'next'
import StepsChart from '../../components/stepsChart/StepsChart'
import CartView from '../../components/cartPage/CartView'
import orderDummy from '../../constans/orderDummy'
import SimilarCarousel from '../../components/productPage/similarProductsCarousel/SimilarCarousel'

export const metadata: Metadata = {
    title: 'NeXtPC - Cart',
    description: 'neXtPC app homepage',
}

const CartPage = () => {
    return (
        <MainLayout>
            <StepsChart step="cart" />
            <CartView order={orderDummy} />
            <SimilarCarousel productCategory={orderDummy.products[0].product.category.name} />
        </MainLayout>
    )
}

export default CartPage
