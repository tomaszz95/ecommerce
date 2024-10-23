import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import MainLayout from '../../../components/layouts/MainLayout'
import CategoryHead from '../../../components/categoryPage/CategoryHead'
import CategoryContent from '../../../components/categoryPage/CategoryContent'
import capitalizeFirstLetter from '../../../components/utils/capitalizeFirstLetter'

import dummyProducts from '../../../constans/dummyProducts'

type Props = {
    params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const categorySlug = params.category || 'Categories'
    const categoryName = capitalizeFirstLetter(categorySlug)

    return {
        title: `NeXtPC - ${categoryName}`,
        description: `Explore products in ${categoryName} category on NeXtPC`,
    }
}

const CategoryPage = ({ params }: Props) => {
    const categorySlug = params.category || 'Shop'
    const categoryName = capitalizeFirstLetter(categorySlug)

    const initialProducts = dummyProducts.filter((product) => product.category.name === categoryName)

    if (!initialProducts.length) {
        notFound()
    }

    return (
        <MainLayout>
            <CategoryHead
                categoryName={categoryName}
                categorySlug={categorySlug}
                productsCount={initialProducts.length}
            />
            <CategoryContent initialProducts={initialProducts} />
        </MainLayout>
    )
}

export default CategoryPage
