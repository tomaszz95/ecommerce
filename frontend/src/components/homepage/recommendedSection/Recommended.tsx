import RecommendedProductsCarousel from '../../product/ProductsCarousel'
import RecommendedProductsBox from './RecommendedProductsBox'

import styles from './Recommended.module.css'

const Recommended = () => {
    return (
        <section className={styles.recommendedSection}>
            <h2>Recommended</h2>
            <RecommendedProductsCarousel />
            <RecommendedProductsBox />
        </section>
    )
}

export default Recommended
