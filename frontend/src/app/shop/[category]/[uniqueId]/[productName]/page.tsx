import MainLayout from '../../../../../components/layouts/MainLayout'
import ProductSection from '../../../../../components/productPage/productInfo/ProductSection'
import ProductPresentation from '../../../../../components/productPage/productPresentation/ProductPresentation'
import ProductSpecification from '../../../../../components/productPage/productSpecification/ProductSpecification'
import SimilarCarousel from '../../../../../components/productPage/similarProductsCarousel/SimilarCarousel'
import OpinionsSection from '../../../../../components/productPage/opinionsSection/OpinionsSection'
import MayInterestCarousel from '../../../../../components/productPage/mayInterestSection/mayInterestCarousel'
import ServerError from '../../../../../components/serverError/ServerError'

import { API_URL } from '../../../../../constans/url'

type Props = {
    params: { uniqueId: string; productName: string; category: string }
}

const SingleProductPage = async ({ params }: Props) => {
    const { uniqueId } = params

    try {
        const response = await fetch(`${API_URL}/api/products/${uniqueId}?timestamp=${Date.now()}`)

        if (!response.ok) {
            throw new Error('Product not found')
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
    } catch (err) {
        return (
            <MainLayout>
                <ServerError />
            </MainLayout>
        )
    }
}

export default SingleProductPage
