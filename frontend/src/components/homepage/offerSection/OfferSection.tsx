import OfferSectionItem from './OfferSectionItem'
import OfferCarousel from './OfferCarousel'

import navItems from '../../../constans/navItems'

import { productType } from '../../../types/types'

import styles from './OfferSection.module.css'

type ComponentType = {
    products: productType[]
}

const OfferSection = ({ products }: ComponentType) => {
    return (
        <section className={styles.offerSection}>
            {navItems.map((item) => {
                const filteredProducts = products.filter((product) => product.category.name === item.name).slice(0, 10)

                return (
                    <div className={styles.offerSectionBox} key={item.name}>
                        <OfferSectionItem name={item.name} photo={item.photo} link={item.link} key={item.name} />
                        <OfferCarousel products={filteredProducts} />
                    </div>
                )
            })}
        </section>
    )
}

export default OfferSection
