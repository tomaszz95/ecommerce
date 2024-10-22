import OfferCarousel from '../../carousels/offerCarousel/OfferCarousel'
import dummyProducts from '../../../constans/dummyProducts'

import styles from './MayInterestCarousel.module.css'

type ComponentType = {
    productCompany: string
}

const MayInterestCarousel = ({ productCompany }: ComponentType) => {
    const filteredProducts = dummyProducts.filter((product) => product.company === productCompany).slice(0, 10)

    return (
        <section className={styles.mayInterestCarousel}>
            <h2>May interest you</h2>
            <OfferCarousel products={filteredProducts} />
        </section>
    )
}

export default MayInterestCarousel
