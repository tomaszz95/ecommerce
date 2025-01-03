import type { Metadata } from 'next'

import MainLayout from '../../../../../components/layouts/MainLayout'
import ProductSection from '../../../../../components/productPage/productInfo/ProductSection'
import ProductPresentation from '../../../../../components/productPage/productPresentation/ProductPresentation'
import ProductSpecification from '../../../../../components/productPage/productSpecification/ProductSpecification'
import SimilarCarousel from '../../../../../components/productPage/similarProductsCarousel/SimilarCarousel'
import OpinionsSection from '../../../../../components/productPage/opinionsSection/OpinionsSection'
import MayInterestCarousel from '../../../../../components/productPage/mayInterestSection/MayInterestCarousel'
import ServerError from '../../../../../components/serverError/ServerError'

import { API_URL } from '../../../../../constans/url'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { uniqueId } = params

    try {
        const response = await fetch(`${API_URL}/api/products/product/${uniqueId}?timestamp=${Date.now()}`)

        if (!response.ok) {
            throw new Error('Failed to fetch product data')
        }

        const { product } = await response.json()

        return {
            title: `NeXtPC - ${product.name}`,
            description: `Find out more about the ${product.name}, its features, specifications, and reviews.`,
        }
    } catch (error) {
        return {
            title: 'NeXtPC - Product',
            description: 'Explore our wide range of products and find your perfect match.',
        }
    }
}

type Props = {
    params: { uniqueId: string; productName: string; category: string }
}

const SingleProductPage = async ({ params }: Props) => {
    const { uniqueId } = params

    try {
        const response = await fetch(`${API_URL}/api/products/product/${uniqueId}?timestamp=${Date.now()}`)

        if (!response.ok) {
            const errorData = await response.json()

            throw new Error(errorData.msg || 'Product not found')
        }

        const { product, similarProducts, mayInterestProducts } = await response.json()

        return (
            <MainLayout>
                <ProductSection product={product} />
                <ProductPresentation productPresentation={product.presentation} />
                <ProductSpecification productSpecification={product.specification} />
                <SimilarCarousel similarProducts={similarProducts} />
                <OpinionsSection
                    productReviews={product.reviews}
                    averageRating={product.averageRating}
                    numOfReviews={product.numOfReviews}
                    productId={product._id}
                />
                <MayInterestCarousel mayInterestProducts={mayInterestProducts} />
            </MainLayout>
        )
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

        return (
            <MainLayout>
                <ServerError errorText={errorMessage} />
            </MainLayout>
        )
    }
}

export default SingleProductPage
