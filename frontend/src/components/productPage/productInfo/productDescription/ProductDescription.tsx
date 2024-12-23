import ProductHeading from './ProductHeading'

import styles from './ProductDescription.module.css'

type ComponentType = {
    company: string
    description: string
    productName: string
    averageRating: number
    numOfReviews: number
}

const ProductDescription = ({ description, productName, company, averageRating, numOfReviews }: ComponentType) => {
    return (
        <div className={styles.descriptionBox}>
            <ProductHeading
                productName={productName}
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
