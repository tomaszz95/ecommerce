import ProductSpecificationItem from './ProductSpecificationItem'

import productSpecificationDummy from '../../../constans/productSpecificationDummy'

import styles from './ProductSpecification.module.css'

const ProductSpecification = () => {
    return (
        <section className={styles.productSpecificationSection}>
            <h2>Product Specification</h2>
            <table className={styles.productSpecificationTable}>
                <tbody>
                    {Object.entries(productSpecificationDummy).map(([key, value]) => (
                        <ProductSpecificationItem key={key} name={key} value={value} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default ProductSpecification
