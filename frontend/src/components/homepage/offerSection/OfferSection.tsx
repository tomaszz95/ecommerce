import ProductsCarousel from '../../product/ProductsCarousel'
import BiggestPromotion from './BiggestPromotion'
import LatestProducts from './LatestProducts'

import styles from './OfferSection.module.css'

const OfferSection = () => {
    return (
        <section className={styles.offerSection}>
            <div className={styles.offerSectionBox}>
                <h2>Deal of the day</h2>
                <span className={styles.offerSectionPromotion}>-20%</span>
                <BiggestPromotion />
            </div>
            <div className={styles.offerSectionBox}>
                <h2>Latest products</h2>
                <LatestProducts />
                <ProductsCarousel />
            </div>
        </section>
    )
}

export default OfferSection
