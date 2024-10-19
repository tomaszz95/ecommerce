import type { Metadata } from 'next'

import MainLayout from '../../../../components/layouts/MainLayout'
import ProductSection from '../../../../components/productPage/productInfo/ProductSection'
import ProductPresentation from '../../../../components/productPage/productPresentation/ProductPresentation'

import capitalizeFirstLetter from '../../../../components/utils/capitalizeFirstLetter'
import createProductNameFromLink from '../../../../components/utils/createProductNameFromString'

import dummyProduct from '../../../../constans/dummyProducts'

type Props = {
    params: { productName: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const productSlug = params.productName || 'Product'
    const productName = createProductNameFromLink(productSlug)
    const productNameFinal = capitalizeFirstLetter(productName)

    return {
        title: `NeXtPC - ${productNameFinal}`,
        description: `Explore products in ${productNameFinal} category on NeXtPC`,
    }
}

const SingleProductPage = ({ params }: Props) => {
    const productSlug = params.productName || 'Product'
    const productName = createProductNameFromLink(productSlug)
    const productNameFinal = capitalizeFirstLetter(productName)

    const findProductByName = dummyProduct.find((product) => product.name === productNameFinal)

    return (
        <MainLayout>
            <ProductSection product={findProductByName} />
            {findProductByName && <ProductPresentation productName={findProductByName.name} />}
        </MainLayout>
    )
}

export default SingleProductPage
