import ReactDOM from 'react-dom'

import Image, { StaticImageData } from 'next/image'

import HightlightButton from '../../../../components/UI/buttons/HightlightButton'

import styles from './ProductAddToCartModal.module.css'

type ComponentType = {
    price: number
    productName: string
    photo: StaticImageData
    onClose: () => void
}

const ProductAddToCartModal = ({ price, productName, photo, onClose }: ComponentType) => {
    return ReactDOM.createPortal(
        <div className={styles.modalContainer} onClick={onClose}>
            <div className={styles.modal}>
                <h2>Product added to cart</h2>
                <div className={styles.modalInfo}>
                    <div className={styles.modalName}>
                        <Image src={photo} alt={productName} />
                        <p>{productName}</p>
                    </div>
                    <span className={styles.modalPrice}>${price}</span>
                </div>
                <div className={styles.modalButtons}>
                    <button onClick={onClose} className={styles.modalBackButton}>
                        Back to shopping
                    </button>
                    <HightlightButton href="/cart">Go to the cart</HightlightButton>
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default ProductAddToCartModal
