import ProductDescription from './ProductDescription'
import ProductPhotoGallery from './ProductPhotoGallery'
import styles from './ProductDetails.module.css'
import { dummyProductsType } from '../../constans/dummyProducts'

type ComponentType = {
    product: dummyProductsType
}

const ProductDetails = ({ product }: ComponentType) => {
    return (
        <div className={styles.productDetails}>
            <ProductPhotoGallery photos={product.images} productName={product.name} />
            <ProductDescription />
        </div>
    )
}

export default ProductDetails
