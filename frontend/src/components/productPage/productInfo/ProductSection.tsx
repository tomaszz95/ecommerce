import Slug from '../../slug/Slug'
import ProductDetails from './ProductDetails'

import { productType } from '../../../types/types'

import styles from './ProductSection.module.css'

type ComponentType = {
    product: productType
}

const ProductSection = ({ product }: ComponentType) => {
    return (
        <section className={styles.productSection}>
            <Slug
                categoryLink={product.category.link}
                categoryName={product.category.name}
                productName={product.name}
            />
            <div className={styles.container}>
                <ProductDetails product={product} />
            </div>
        </section>
    )
}

export default ProductSection