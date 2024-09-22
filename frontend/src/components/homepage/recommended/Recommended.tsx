import RecommendedProductsCarousel from '../../../components/UI/Carousels/RecommendedProductsCarousel'
import styles from './Recommended.module.css'

const Recommended = () => {
    return (
        <section className={styles.recommendedSection}>
            <h2>Recommended</h2>
            <RecommendedProductsCarousel />
        </section>
    )
}

export default Recommended
