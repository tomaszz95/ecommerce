import type { Metadata } from 'next'

import MainLayout from '../../../../components/layouts/MainLayout'
import Slug from '../../../../components/slug/Slug'

import capitalizeFirstLetter from '../../../../components/utils/capitalizeFirstLetter'
import createProductNameFromLink from '../../../../components/utils/createProductNameFromString'

import dummyProduct from '../../../../constans/dummyProducts'

type Props = {
    params: { productId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const categorySlug = params.productId || 'Product'
    const categoryName = createProductNameFromLink(categorySlug)
    const categoryNameFinish = capitalizeFirstLetter(categoryName)

    return {
        title: `NeXtPC - ${categoryNameFinish}`,
        description: `Explore products in ${categoryNameFinish} category on NeXtPC`,
    }
}

const SingleProductPage = () => {
    const product = dummyProduct[0]

    return (
        <MainLayout>
            <Slug categoryLink={product.categoryLink} categoryName={product.category} />
        </MainLayout>
    )
}

export default SingleProductPage
