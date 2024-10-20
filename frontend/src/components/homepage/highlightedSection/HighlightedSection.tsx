import ProductsCarousel from '../../carousels/productCarousel/ProductsCarousel'
import BiggestPromotion from './BiggestPromotion'
import LatestProducts from './LatestProducts'

import dummyProducts from '../../../constans/dummyProducts'

import styles from './HighlightedSection.module.css'

const HighlightedSection = () => {
    const getFirst8Products = dummyProducts.slice(0, 8)

    const productWithHighestPromotion = dummyProducts.reduce((maxProduct, currentProduct) => {
        return currentProduct.promotion.promotionPercent > maxProduct.promotion.promotionPercent
            ? currentProduct
            : maxProduct
    }, dummyProducts[0])

    return (
        <section className={styles.highlightSection}>
            <div className={styles.highlightSectionPromotion}>
                <h2>Deal of the day</h2>
                <div className={styles.highlightSectionPromotionBox}>
                    <div className={styles.highlightSectionPromotionText}>
                        {productWithHighestPromotion.promotion.promotionPercent}%
                    </div>
                    <BiggestPromotion product={productWithHighestPromotion} />
                </div>
            </div>
            <div className={styles.highlightSectionPromotion}>
                <h2>Latest products</h2>
                <div className={styles.highlightSectionLatest}>
                    <LatestProducts products={getFirst8Products} />
                    <ProductsCarousel products={getFirst8Products} />
                </div>
            </div>
        </section>
    )
}

export default HighlightedSection
