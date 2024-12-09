import ProductSpecificationItem from './ProductSpecificationItem'

import styles from './ProductSpecification.module.css'

type ComponentType = {
    productSpecification: { [keys: string]: string }
}

const ProductSpecification = ({ productSpecification }: ComponentType) => {
    return (
        <section className={styles.productSpecificationSection}>
            <h2>Product Specification</h2>
            <table className={styles.productSpecificationTable}>
                <tbody>
                    {Object.entries(productSpecification).map(([key, value]) => (
                        <ProductSpecificationItem key={key} name={key} value={value} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default ProductSpecification
