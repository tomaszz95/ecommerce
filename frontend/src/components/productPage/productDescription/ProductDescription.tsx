import Image from 'next/image'

import styles from './ProductDescription.module.css'
import ProductHeading from './ProductHeading'

type ComponentType = {
    description: string
    productName: string
    productId: string
}

const ProductDescription = ({ description, productName, productId }: ComponentType) => {
    return (
        <div className={styles.descriptionBox}>
            <ProductHeading productName={productName} productId={productId} />
            <div className={styles.descriptionText}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductDescription
