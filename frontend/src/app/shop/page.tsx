import type { Metadata } from 'next'

import CategoryContent from '../../components/categoryPage/CategoryContent'
import CategoryHead from '../../components/categoryPage/CategoryHead'
import MainLayout from '../../components/layouts/MainLayout'

import dummyProducts from '../../constans/dummyProducts'

export const metadata: Metadata = {
    title: 'NeXtPC - Shop',
    description: 'neXtPC app homepage',
}

const ShopPage = () => {
    return (
        <MainLayout>
            <CategoryHead categoryName="Shop" categorySlug="" productsCount={dummyProducts.length} />
            <CategoryContent initialProducts={dummyProducts} />
        </MainLayout>
    )
}

export default ShopPage
