import Slug from '../slug/Slug'

import ProductHeading from './ProductHeading'
import ProductDetails from './ProductDetails'
import ProductBuyMenu from './ProductBuyMenu'

import { dummyProductsType } from '../../constans/dummyProducts'

import styles from './ProductSection.module.css'

type ComponentType = {
    product: dummyProductsType
}

const ProductSection = ({ product }: ComponentType) => {
    return (
        <section className={styles.section}>
            <Slug categoryLink={product.categoryLink} categoryName={product.category} productName={product.name} />
            <div className={styles.container}>
                <div className={styles.productInfoContainer}>
                    <ProductHeading productName={product.name} productId={product.prodId} />
                    <ProductDetails product={product} />
                </div>
                <ProductBuyMenu />
            </div>
        </section>
    )
}

export default ProductSection
