import ProductDescription from './productDescription/ProductDescription'
import ProductPhotoGallery from './desktopGallery/ProductPhotoGallery'
import ProductBuyMenu from './productBuyMenu/ProductBuyMenu'
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
                <ProductDescription
                    description={product.description}
                    company={product.company}
                    productName={product.name}
                    productId={product.prodId}
                />
                <ProductBuyMenu price={product.price} stock={product.stock} productId={product.prodId} />
            </div>
        </div>
    )
}

export default ProductDetails
