import type { Metadata } from 'next'

import MainLayout from '../../components/layouts/MainLayout'
import CategoryContent from '../../components/categoryPage/CategoryContent'
import CategoryHead from '../../components/categoryPage/CategoryHead'
import ServerError from '../../components/serverError/ServerError'

import buildFiltersUrl from '../../helpers/buildFiltersUrl'
import useFetchFilterProducts from '../../hooks/useFetchFilterProducts'

export const metadata: Metadata = {
    title: 'NeXtPC - Shop',
    description: 'NextPC shop page',
}

type Props = {
    searchParams: { [key: string]: string }
}

const ShopPage = async ({ searchParams }: Props) => {
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
        const url = buildFiltersUrl(searchParams)

        const { products, totalProducts, totalPages, currentPage } = await useFetchFilterProducts(url)

        return (
            <MainLayout>
                <CategoryHead category="shop" productsCount={totalProducts} />
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

export default ShopPage
