import OfferCarousel from '../../carousels/offerCarousel/OfferCarousel'

import { homepageSingleProductData } from '../../../types/types'

import styles from './MayInterestCarousel.module.css'

type ComponentType = {
    mayInterestProducts: homepageSingleProductData[]
}

const MayInterestCarousel = ({ mayInterestProducts }: ComponentType) => {
    return (
        <section className={styles.mayInterestCarousel}>
            <h2>May interest you</h2>
            <OfferCarousel products={mayInterestProducts} />
        </section>
    )
}

export default MayInterestCarousel
