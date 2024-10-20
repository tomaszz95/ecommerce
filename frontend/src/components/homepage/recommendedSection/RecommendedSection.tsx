import ProductsCarousel from '../../carousels/productCarousel/ProductsCarousel'
import RecommendedProductsBox from './RecommendedProductsBox'

import styles from './RecommendedSection.module.css'

import dummyProducts from '../../../constans/dummyProducts'

const RecommendedSection = () => {
    const filteredRecommendedProducts = dummyProducts.filter((product) => product.recommended === true).slice(0, 8)

    return (
        <section className={styles.recommendedSection}>
            <section className={styles.container}>
                <h2>Recommended</h2>
                <ProductsCarousel products={filteredRecommendedProducts} />
                <RecommendedProductsBox products={filteredRecommendedProducts} />
            </section>
        </section>
    )
}

export default RecommendedSection
