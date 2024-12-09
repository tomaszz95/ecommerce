import PresentationItem from './PresentationItem'

import styles from './ProductPresentation.module.css'

type ComponentType = {
    productPresentation: { title: string; text: string; img: string }[]
}

const ProductPresentation = ({ productPresentation }: ComponentType) => {
    return (
        <section className={styles.productPresentationSection}>
            <h2>Product Presentation</h2>
            {productPresentation.map((item) => (
                <PresentationItem key={item.title} title={item.title} text={item.text} img={item.img} />
            ))}
        </section>
    )
}

export default ProductPresentation
