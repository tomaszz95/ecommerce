'use client'

import { useEffect, useState } from 'react'

import useMetadata from '../../../hooks/useMetadata'

import MainLayout from '../../../components/layouts/MainLayout'
import CategoryHead from '../../../components/categoryPage/CategoryHead'
import CategoryContent from '../../../components/categoryPage/CategoryContent'
import ServerError from '../../../components/serverError/ServerError'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'

import { categorySingleProductData } from '../../../types/types'

import buildFiltersUrl from '../../../helpers/buildFiltersUrl'

type Props = {
    params: { category: string }
    searchParams: { [key: string]: string }
}

const CategoryPage = ({ params, searchParams }: Props) => {
    const { category } = params

    useMetadata({
        title: `NeXtPC - ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        description: `Products from category ${category}`,
    })

    const [productsData, setProductsData] = useState<{
        products: categorySingleProductData[]
        totalPages: number
        totalProducts: number
        currentPage: number
    } | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [serverError, setServerError] = useState('')

    const filterParams = {
        priceFrom: Number(searchParams.priceFrom || '1'),
        priceTo: Number(searchParams.priceTo || '9999'),
        company:
            searchParams.company && searchParams.company !== '[]'
                ? searchParams.company.split(',').map((item) => item.trim())
                : [],
        available: searchParams.available === 'true',
        promotion: searchParams.promotion === 'true',
    }

    useEffect(() => {
        setIsLoading(true)

        const getProductsData = async () => {
            const url = buildFiltersUrl(searchParams, category)

            try {
                const response = await fetch(url)

                if (!response.ok) {
                    const errorData = await response.json()

                    throw new Error(errorData.msg || 'Products not found')
                }

                const data = await response.json()

                setProductsData(data)
                setIsLoading(false)
            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

                setServerError(errorMessage)
                setIsLoading(false)
            }
        }

        getProductsData()
    }, [searchParams, category])

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

    if (!productsData) {
        return (
            <MainLayout>
                <ServerError errorText="Something went wrong." errorMsg="Please try again later." />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <CategoryHead category={category} productsCount={productsData.totalProducts} />
            <CategoryContent
                products={productsData.products}
                totalPages={productsData.totalPages}
                currentPage={productsData.currentPage}
                sort={searchParams.sort || 'default'}
                filterParams={filterParams}
            />
        </MainLayout>
    )
}

export default CategoryPage
