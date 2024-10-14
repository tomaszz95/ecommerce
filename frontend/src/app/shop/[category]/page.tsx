import type { Metadata } from 'next'

import capitalizeFirstLetter from '../../../components/utils/capitalizeFirstLetter'

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
    return (
        <main>
            <h1>Category: {params.category}</h1>
        </main>
    )
}

export default CategoryPage
