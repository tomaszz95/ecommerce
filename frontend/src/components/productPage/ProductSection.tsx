import Slug from '../slug/Slug'

import ProductHeading from './ProductHeading'
import ProductDetails from './ProductDetails'

import { dummyProductsType } from '../../constans/dummyProducts'

import styles from './ProductSection.module.css'
import Link from 'next/link'

type ComponentType = {
    product: dummyProductsType | undefined
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
                <div className={styles.productInfoContainer}>
                    <ProductHeading productName={product.name} productId={product.prodId} />
                    <ProductDetails product={product} />
                </div>
            </div>
        </section>
    )
}

export default ProductSection
