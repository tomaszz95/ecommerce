import Slug from '../slug/Slug'

import styles from './CategoryHead.module.css'

type ComponentType = {
    categoryName: string
    categorySlug: string
    productsCount: number
}

const CategoryHead = ({ categorySlug, categoryName, productsCount }: ComponentType) => {
    return (
        <section className={styles.categoryHeadSection}>
            <Slug categoryLink={`/shop/${categorySlug}`} categoryName={categoryName} />
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
