import BestPromotion from './BestPromotion'
import LatestProduct from './LatestProduct'
import styles from './OfferSection.module.css'

const OfferSection = () => {
    return (
        <section className={styles.offerSection}>
            <div className={styles.offerSectionBox}>
                <h2>Best promotion</h2>
                <BestPromotion />
            </div>
            <div className={styles.offerSectionBox}>
                <h2>Latest products</h2>
                <LatestProduct />
            </div>
        </section>
    )
}

export default OfferSection
