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
            <ProductPhotoGallery photos={product.images} productName={product.name} productId={product._id} />
            <ProductDescription
                company={product.company}
                description={product.description}
                productName={product.name}
                averageRating={product.averageRating}
                numOfReviews={product.numOfReviews}
            />
            <ProductBuyMenu
                price={product.price}
                promotionPrice={product.promotion.promotionPrice}
                stock={product.stock}
                productName={product.name}
                productId={product._id}
                photo={product.images[0]}
            />
        </div>
    )
}

export default ProductDetails
