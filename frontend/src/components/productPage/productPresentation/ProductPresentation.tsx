import PresentationItem from './PresentationItem'

import productPresentationDummy from '../../../constans/productPresentationDummy'

import styles from './ProductPresentation.module.css'

type ComponentType = {
    productName: string
}

const ProductPresentation = ({ productName }: ComponentType) => {
    return (
        <section className={styles.productPresentationSection}>
            <h2>{productName} - informations</h2>
            {productPresentationDummy.map((item) => (
                <PresentationItem key={item.title} title={item.title} text={item.text} img={item.img} />
            ))}
        </section>
    )
}

export default ProductPresentation
