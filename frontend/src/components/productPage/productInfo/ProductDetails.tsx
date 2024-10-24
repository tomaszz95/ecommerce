import ProductPhotoGallery from './desktopGallery/ProductPhotoGallery'
import ProductDescription from './productDescription/ProductDescription'
import ProductBuyMenu from './productBuyMenu/ProductBuyMenu'

import { productType } from '../../../types/types'

import styles from './ProductDetails.module.css'

type ComponentType = {
    product: productType
}

const ProductDetails = ({ product }: ComponentType) => {
    return (
        <div className={styles.productDetails}>
            <ProductPhotoGallery photos={product.images} productName={product.name} />
            <ProductDescription
                company={product.company}
                description={product.description}
                productName={product.name}
                productId={product.prodId}
            />
            <ProductBuyMenu
                price={product.price}
                stock={product.stock}
                productName={product.name}
                productId={product.prodId}
                promotion={product.promotion.isPromotion}
                promotionPercent={product.promotion.promotionPercent}
                photo={product.images[0]}
            />
        </div>
    )
}

export default ProductDetails
