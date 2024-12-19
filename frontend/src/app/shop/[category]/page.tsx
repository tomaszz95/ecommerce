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

    try {
        const url = `${API_URL}/api/products/${category}?page=${page}&sort=${sort}`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Products not found')
        }

        const { products, totalProducts, totalPages, currentPage } = await response.json()
        // console.log(products)
        return (
            <MainLayout>
                <CategoryHead category={category || 'shop'} productsCount={totalProducts} />
                <CategoryContent products={products} totalPages={totalPages} currentPage={currentPage} sort={sort} />
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
