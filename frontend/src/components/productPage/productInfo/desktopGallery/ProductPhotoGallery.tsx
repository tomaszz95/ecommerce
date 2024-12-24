import PhotoCarousel from '../../../carousels/photoCarousel/PhotoCarousel'
import DesktopGallery from './DesktopGallery'

import styles from './ProductPhotoGallery.module.css'

type ComponentType = {
    photos: string[]
    productName: string
    productId: string
    uniqueId: string
}

const ProductPhotoGallery = ({ photos, productName, productId, uniqueId }: ComponentType) => {
    return (
        <div className={styles.photoGallery}>
            <PhotoCarousel photos={photos} productName={productName} productId={productId} uniqueId={uniqueId} />
            <DesktopGallery photos={photos} productName={productName} productId={productId} uniqueId={uniqueId} />
        </div>
    )
}

export default ProductPhotoGallery
