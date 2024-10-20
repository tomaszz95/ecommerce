import OfferCarousel from '../../carousels/offerCarousel/OfferCarousel'
import dummyProducts from '../../../constans/dummyProducts'

import styles from './SimilarCarousel.module.css'

type ComponentType = {
    productCategory: string
}

const SimilarCarousel = ({ productCategory }: ComponentType) => {
    const filteredProducts = dummyProducts.filter((product) => product.category.name === productCategory).slice(0, 10)

    return (
        <section className={styles.similarCarousel}>
            <h2>Recommended for you</h2>
            <OfferCarousel products={filteredProducts} />
        </section>
    )
}

export default SimilarCarousel
