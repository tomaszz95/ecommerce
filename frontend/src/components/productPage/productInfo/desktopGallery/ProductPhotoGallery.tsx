import PhotoCarousel from '../../../carousels/photoCarousel/PhotoCarousel'
import DesktopGallery from './DesktopGallery'

import styles from './ProductPhotoGallery.module.css'

type ComponentType = {
    photos: string[]
    productName: string
    productId: string
}

const ProductPhotoGallery = ({ photos, productName, productId }: ComponentType) => {
    return (
        <div className={styles.photoGallery}>
            <PhotoCarousel photos={photos} productName={productName} productId={productId} />
            <DesktopGallery photos={photos} productName={productName} productId={productId} />
        </div>
    )
}

export default ProductPhotoGallery
