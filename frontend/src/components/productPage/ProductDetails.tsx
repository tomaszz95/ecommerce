import ProductDescription from './ProductDescription'
import ProductPhotoGallery from './ProductPhotoGallery'
import ProductBuyMenu from './ProductBuyMenu'
import styles from './ProductDetails.module.css'
import { dummyProductsType } from '../../constans/dummyProducts'

type ComponentType = {
    product: dummyProductsType
}

const ProductDetails = ({ product }: ComponentType) => {
    return (
        <div className={styles.productDetails}>
            <ProductPhotoGallery photos={product.images} productName={product.name} />
            <div className={styles.productPayment}>
                <ProductDescription description={product.description} company={product.company} />
                <ProductBuyMenu />
            </div>
        </div>
    )
}

export default ProductDetails
