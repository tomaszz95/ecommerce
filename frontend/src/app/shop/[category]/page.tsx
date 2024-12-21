import MainLayout from '../../../components/layouts/MainLayout'
import CategoryHead from '../../../components/categoryPage/CategoryHead'
import CategoryContent from '../../../components/categoryPage/CategoryContent'
import ServerError from '../../../components/serverError/ServerError'

import { API_URL } from '../../../constans/url'

type Props = {
    params: { category: string }
    searchParams: { [key: string]: string }
}

const CategoryPage = async ({ params, searchParams }: Props) => {
    const { category } = params
    const { page = '1', sort = 'default' } = searchParams
    const { priceFrom = '1', priceTo = '9999', company = '[]', available = 'false', promotion = 'false' } = searchParams

    const filterParams = {
        priceFrom: Number(priceFrom),
        priceTo: Number(priceTo),
        company: company === '[]' ? [] : company.split(',').map((item) => item.trim()),
        available: available === 'true',
        promotion: promotion === 'true',
    }

    try {
        const sortUrl = sort === 'default' ? '' : `&sort=${sort}`
        const filtersUrl = `${priceFrom === '1' ? '' : `&priceFrom=${priceFrom}`}${priceTo === '9999' ? '' : `&priceTo=${priceTo}`}${company !== '[]' ? `&company=${company}` : ''}${available === 'true' ? `&available=true` : ''}${promotion === 'true' ? `&promotion=true` : ''}`

        const url = `${API_URL}/api/products/${category}?page=${page}${sortUrl}${filtersUrl}`
    
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Products not found')
        }

        const { products, totalProducts, totalPages, currentPage } = await response.json()
       
        return (
            <MainLayout>
                <CategoryHead category={category || 'shop'} productsCount={totalProducts} />
                <CategoryContent
                    products={products}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    sort={sort}
                    filterParams={filterParams}
                />
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

export default CategoryPage
