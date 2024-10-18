import ProductHeading from './ProductHeading'

import styles from './ProductDescription.module.css'

type ComponentType = {
    description: string
    productName: string
    productId: string
    company: string
}

const ProductDescription = ({ description, productName, productId, company }: ComponentType) => {
    return (
        <div className={styles.descriptionBox}>
            <ProductHeading productName={productName} productId={productId} company={company} />
            <div className={styles.descriptionText}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductDescription
