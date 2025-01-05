'use client'

import { useEffect, useState } from 'react'

import useMetadata from '../../../../../hooks/useMetadata'

import MainLayout from '../../../../../components/layouts/MainLayout'
import ProductSection from '../../../../../components/productPage/productInfo/ProductSection'
import ProductPresentation from '../../../../../components/productPage/productPresentation/ProductPresentation'
import ProductSpecification from '../../../../../components/productPage/productSpecification/ProductSpecification'
import SimilarCarousel from '../../../../../components/productPage/similarProductsCarousel/SimilarCarousel'
import OpinionsSection from '../../../../../components/productPage/opinionsSection/OpinionsSection'
import MayInterestCarousel from '../../../../../components/productPage/mayInterestSection/MayInterestCarousel'
import LoadingSpinner from '../../../../../components/loadingSpinner/LoadingSpinner'
import ServerError from '../../../../../components/serverError/ServerError'

import createProductNameFromLink from '../../../../../components/utils/createProductNameFromString'

import { homepageSingleProductData, productType } from '../../../../../types/types'

import { API_URL } from '../../../../../constans/url'

type Props = {
    params: { uniqueId: string; productName: string }
}

const SingleProductPage = ({ params }: Props) => {
    const { uniqueId, productName } = params
    const prodNameTitle = createProductNameFromLink(productName)

    useMetadata({
        title: `${prodNameTitle}`,
        description: `Main page for product ${prodNameTitle}`,
    })

    const [productData, setProductData] = useState<{
        product: productType
        similarProducts: homepageSingleProductData[]
        mayInterestProducts: homepageSingleProductData[]
        tokenData: {
            name: string
            userId: string
        }
    } | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        setIsLoading(true)

        const getProductsData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/products/product/${uniqueId}?timestamp=${Date.now()}`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()

                    throw new Error(errorData.msg || 'Product not found')
                }

                const data = await response.json()

                setProductData(data)
                setIsLoading(false)
            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

                setServerError(errorMessage)
                setIsLoading(false)
            }
        }

        getProductsData()
    }, [uniqueId])

    if (isLoading) {
        return (
            <MainLayout>
                <LoadingSpinner />
            </MainLayout>
        )
    }

    if (!isLoading && serverError !== '') {
        return (
            <MainLayout>
                <ServerError errorText={serverError} errorMsg="Please try again later" />
            </MainLayout>
        )
    }

    if (!productData) {
        return (
            <MainLayout>
                <ServerError errorText="Something went wrong." errorMsg="Please try again later." />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <ProductSection product={productData.product} />
            <ProductPresentation productPresentation={productData.product.presentation} />
            <ProductSpecification productSpecification={productData.product.specification} />
            <SimilarCarousel similarProducts={productData.similarProducts} />
            <OpinionsSection
                productReviews={productData.product.reviews}
                averageRating={productData.product.averageRating}
                numOfReviews={productData.product.numOfReviews}
                productId={productData.product._id}
                tokenData={productData.tokenData}
            />
            <MayInterestCarousel mayInterestProducts={productData.mayInterestProducts} />
        </MainLayout>
    )
}

export default SingleProductPage
