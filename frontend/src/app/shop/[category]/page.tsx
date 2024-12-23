import type { Metadata } from 'next'

import MainLayout from '../../../components/layouts/MainLayout'
import CategoryHead from '../../../components/categoryPage/CategoryHead'
import CategoryContent from '../../../components/categoryPage/CategoryContent'
import ServerError from '../../../components/serverError/ServerError'

import buildFiltersUrl from '../../../helpers/buildFiltersUrl'
import useFetchFilterProducts from '../../../hooks/useFetchFilterProducts'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = params

    return {
        title: `NeXtPC - ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        description: `Products from category ${category}`,
    }
}

type Props = {
    params: { category: string }
    searchParams: { [key: string]: string }
}

const CategoryPage = async ({ params, searchParams }: Props) => {
    const { category } = params

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

    try {
        const url = buildFiltersUrl(searchParams, category)

        const { products, totalProducts, totalPages, currentPage } = await useFetchFilterProducts(url)

        return (
            <MainLayout>
                <CategoryHead category={category || 'shop'} productsCount={totalProducts} />
                <CategoryContent
                    products={products}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    sort={searchParams.sort || 'default'}
                    filterParams={filterParams}
                />
            </MainLayout>
        )
    } catch (err: any) {
        return (
            <MainLayout>
                <ServerError errorText={err.message} errorMsg="Please provide valid filters" />
            </MainLayout>
        )
    }
}

export default CategoryPage
