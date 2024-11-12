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
    const isEmptyObject = (obj: object) => Object.keys(obj).length === 0

    return (
        <MainLayout>
            <StepsChart step="cart" />
            <CartView order={orderDummy} />
            {!isEmptyObject(orderDummy) && (
                <SimilarCarousel productCategory={orderDummy.products[0].product.category.name} />
            )}
        </MainLayout>
    )
}

export default CartPage
