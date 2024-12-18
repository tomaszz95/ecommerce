import MainLayout from '../../../components/layouts/MainLayout'
import CategoryHead from '../../../components/categoryPage/CategoryHead'
import CategoryContent from '../../../components/categoryPage/CategoryContent'
import ServerError from '../../../components/serverError/ServerError'

import { API_URL } from '../../../constans/url'

type Props = {
    params: { category: string }
}

const CategoryPage = async ({ params }: Props) => {
    const { category } = params
    try {
        const response = await fetch(`${API_URL}/api/products/?category=${category}`)

        if (!response.ok) {
            throw new Error('Products not found')
        }

        const { products, totalProducts, totalPages, currentPage } = await response.json()

        return (
            <MainLayout>
                <CategoryHead category={category || 'shop'} productsCount={totalProducts} />
                <CategoryContent products={products} totalPages={totalPages} currentPage={currentPage} />
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
