import Link from 'next/link'

import Slug from '../slug/Slug'
import ProductDetails from './ProductDetails'

import { productType } from '../../types/types'

import styles from './ProductSection.module.css'

type ComponentType = {
    product: productType | undefined
}

const ProductSection = ({ product }: ComponentType) => {
    if (!product) {
        return (
            <section className={styles.productSection}>
                <div className={styles.productNotFound}>
                    <p>Product not found</p>
                    <Link href="/"> &lt; Go Back</Link>
                </div>
            </section>
        )
    }

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
