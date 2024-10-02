import BrandItem from './BrandItem'

import brandLogos from '../../../constans/brandLogos'

import styles from './BrandsSection.module.css'

const BrandsSection = () => {
    return (
        <section className={styles.brandsSection}>
            <h2>Brands zone</h2>
            <div className={styles.brandsContainer}>
                {brandLogos.map((item) => (
                    <BrandItem key={item.brand} brand={item.brand} logo={item.logo} />
                ))}
            </div>
        </section>
    )
}

export default BrandsSection
