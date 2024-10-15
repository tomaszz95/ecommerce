import ProductsCarousel from '../../productCarousel/ProductsCarousel'
import RecommendedProductsBox from './RecommendedProductsBox'

import styles from './Recommended.module.css'

const Recommended = () => {
    return (
        <section className={styles.recommendedSection}>
            <section className={styles.container}>
                <h2>Recommended</h2>
                <ProductsCarousel />
                <RecommendedProductsBox />
            </section>
        </section>
    )
}

export default Recommended
