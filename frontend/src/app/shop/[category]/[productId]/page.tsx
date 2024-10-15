import ProductSection from '../../../../components/productPage/ProductSection'
import type { Metadata } from 'next'

import MainLayout from '../../../../components/layouts/MainLayout'

import capitalizeFirstLetter from '../../../../components/utils/capitalizeFirstLetter'
import createProductNameFromLink from '../../../../components/utils/createProductNameFromString'

import dummyProduct from '../../../../constans/dummyProducts'

type Props = {
    params: { productId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const categorySlug = params.productId || 'Product'
    const categoryName = createProductNameFromLink(categorySlug)
    const categoryNameFinal = capitalizeFirstLetter(categoryName)

    return {
        title: `NeXtPC - ${categoryNameFinal}`,
        description: `Explore products in ${categoryNameFinal} category on NeXtPC`,
    }
}

const SingleProductPage = () => {
    const product = dummyProduct[0]

    return (
        <MainLayout>
            <ProductSection product={product} />
        </MainLayout>
    )
}

export default SingleProductPage
