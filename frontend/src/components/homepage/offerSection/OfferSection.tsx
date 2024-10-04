import OfferSectionItem from './OfferSectionItem'
import OfferCarousel from './OfferCarousel'

import navItems from '../../../constans/navItems'

import styles from './OfferSection.module.css'

const OfferSection = () => {
    return (
        <section className={styles.offerSection}>
            {navItems.map((item) => (
                <div className={styles.offerSectionBox} key={item.name}>
                    <OfferSectionItem name={item.name} photo={item.photo} link={item.link} key={item.name} />
                    <OfferCarousel />
                </div>
            ))}
        </section>
    )
}

export default OfferSection
