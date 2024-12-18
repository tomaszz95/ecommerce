import Slug from '../slug/Slug'

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'

import styles from './CategoryHead.module.css'

type ComponentType = {
    category: string
    productsCount: number
}

const CategoryHead = ({ category, productsCount }: ComponentType) => {
    const categoryName = capitalizeFirstLetter(category)
    return (
        <section className={styles.categoryHeadSection}>
            <Slug category={categoryName} />
            <div className={styles.categoryHeadText}>
                <h1>{categoryName}</h1>
                <span>
                    ({productsCount} {productsCount === 1 ? 'result' : 'results'})
                </span>
            </div>
        </section>
    )
}

export default CategoryHead
