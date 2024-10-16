import PhotoCarousel from '../photoCarousel/PhotoCarousel'
import DesktopGallery from './DesktopGallery'
import styles from './ProductPhotoGallery.module.css'

type ComponentType = {
    photos: any[]
    productName: string
}

const ProductPhotoGallery = ({ photos, productName }: ComponentType) => {
    return (
        <div className={styles.photoGallery}>
            <PhotoCarousel photos={photos} productName={productName} />
            <DesktopGallery photos={photos} productName={productName} />
        </div>
    )
}

export default ProductPhotoGallery
