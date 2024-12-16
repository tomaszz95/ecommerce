import OfferCarousel from '../../carousels/offerCarousel/OfferCarousel'

import { homepageSingleProductData } from '../../../types/types'

import styles from './SimilarCarousel.module.css'

type ComponentType = {
    similarProducts: homepageSingleProductData[]
}

const SimilarCarousel = ({ similarProducts }: ComponentType) => {
    return (
        <section className={styles.similarCarousel}>
            <h2>Recommended for you</h2>
            <OfferCarousel products={similarProducts} />
        </section>
    )
}

export default SimilarCarousel
