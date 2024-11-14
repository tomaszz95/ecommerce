import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import MainLayout from '../../../../components/layouts/MainLayout'
import ProductSection from '../../../../components/productPage/productInfo/ProductSection'
import ProductPresentation from '../../../../components/productPage/productPresentation/ProductPresentation'
import ProductSpecification from '../../../../components/productPage/productSpecification/ProductSpecification'
import SimilarCarousel from '../../../../components/productPage/similarProductsCarousel/SimilarCarousel'
import OpinionsSection from '../../../../components/productPage/opinionsSection/OpinionsSection'
import MayInterestCarousel from '../../../../components/productPage/mayInterestSection/mayInterestCarousel'

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

    if (!findProductByName) {
        notFound()
    }

    return (
        <MainLayout>
            <ProductSection product={findProductByName} />
            <ProductPresentation />
            <ProductSpecification />
            <SimilarCarousel productCategory={findProductByName.category.name} />
            <OpinionsSection productId={findProductByName.prodId} />
            <MayInterestCarousel productCompany={findProductByName.company} />
        </MainLayout>
    )
}

export default SingleProductPage
