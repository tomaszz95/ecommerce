import ProductsCarousel from '../../productCarousel/ProductsCarousel'
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
        <section className={styles.offerSection}>
            <div className={styles.offerSectionBox}>
                <h2>Deal of the day</h2>
                <span className={styles.offerSectionPromotion}>
                    {productWithHighestPromotion.promotion.promotionPercent}%
                </span>
                <BiggestPromotion product={productWithHighestPromotion} />
            </div>
            <div className={styles.offerSectionBox}>
                <h2>Latest products</h2>
                <LatestProducts products={getFirst8Products} />
                <ProductsCarousel products={getFirst8Products} />
            </div>
        </section>
    )
}

export default HighlightedSection
