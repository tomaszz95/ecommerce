import ProductHeading from './ProductHeading'

import styles from './ProductDescription.module.css'

type ComponentType = {
    company: string
    description: string
    productName: string
    productId: string
    averageRating: number
    numOfReviews: number
}

const ProductDescription = ({
    description,
    productName,
    productId,
    company,
    averageRating,
    numOfReviews,
}: ComponentType) => {
    return (
        <div className={styles.descriptionBox}>
            <ProductHeading
                productName={productName}
                productId={productId}
                company={company}
                averageRating={averageRating}
                numOfReviews={numOfReviews}
            />
            <div className={styles.descriptionText}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductDescription
