'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'

import MainLayout from '../../../../components/layouts/MainLayout'
import ProductSection from '../../../../components/productPage/productInfo/ProductSection'
import ProductPresentation from '../../../../components/productPage/productPresentation/ProductPresentation'
import ProductSpecification from '../../../../components/productPage/productSpecification/ProductSpecification'
import SimilarCarousel from '../../../../components/productPage/similarProductsCarousel/SimilarCarousel'
import OpinionsSection from '../../../../components/productPage/opinionsSection/OpinionsSection'
import MayInterestCarousel from '../../../../components/productPage/mayInterestSection/mayInterestCarousel'
import LoadingSpinner from '../../../../components/loadingSpinner/LoadingSpinner'

import capitalizeFirstLetter from '../../../../components/utils/capitalizeFirstLetter'
import createProductNameFromLink from '../../../../components/utils/createProductNameFromString'

import dummyProduct from '../../../../constans/dummyProducts'

type Props = {
    params: { productName: string }
}

const SingleProductPage = ({ params }: Props) => {
    const productSlug = params.productName || 'Product'
    const productName = createProductNameFromLink(productSlug)
    const productNameFinal = capitalizeFirstLetter(productName)

    const [product, setProduct] = useState<(typeof dummyProduct)[0] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                const foundProduct = dummyProduct.find((product) => product.name === productNameFinal)

                if (!foundProduct) {
                    notFound()
                } else {
                    setProduct(foundProduct)
                }
            } catch (error) {
                console.error('Error fetching product data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProductData()
    }, [productNameFinal])

    useEffect(() => {
        if (product) {
            document.title = `NeXtPC - ${productNameFinal}`
            const metaDescription = document.querySelector('meta[name="description"]')

            if (metaDescription) {
                metaDescription.setAttribute('content', `Explore ${productNameFinal} on NeXtPC`)
            }
        }
    }, [product, productNameFinal])

    return (
        <MainLayout>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {product && (
                        <>
                            <ProductSection product={product} />
                            <ProductPresentation />
                            <ProductSpecification />
                            <SimilarCarousel productCategory={product.category.name} />
                            <OpinionsSection productId={product.prodId} />
                            <MayInterestCarousel productCompany={product.company} />
                        </>
                    )}
                </>
            )}
        </MainLayout>
    )
}

export default SingleProductPage
