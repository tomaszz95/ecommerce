import ReactDOM from 'react-dom'

import Image from 'next/image'

import HightlightButton from '../../../../components/UI/buttons/HightlightButton'
import CurrentPrice from '../../../../components/currentPrice/CurrentPrice'

import { STATIC_URL } from '../../../../constans/url'

import styles from './ProductAddToCartModal.module.css'

type ComponentType = {
    price: number
    productName: string
    photo: string
    promotionPrice: number
    onClose: () => void
}

const ProductAddToCartModal = ({ price, promotionPrice, productName, photo, onClose }: ComponentType) => {
    return ReactDOM.createPortal(
        <div className={styles.modalContainer} onClick={onClose}>
            <div className={styles.modal}>
                <h2>Product added to cart</h2>
                <div className={styles.modalInfo}>
                    <div className={styles.modalName}>
                        <Image src={`${STATIC_URL}/photos/${photo}`} width={1000} height={1000} alt={productName} />
                        <p>{productName}</p>
                    </div>
                    <CurrentPrice price={price} promotionPrice={promotionPrice} isBig={true} />
                </div>
                <div className={styles.modalButtons}>
                    <button onClick={onClose} className={styles.modalBackButton}>
                        Back to shop
                    </button>
                    <HightlightButton href="/cart">Go to the cart</HightlightButton>
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default ProductAddToCartModal
