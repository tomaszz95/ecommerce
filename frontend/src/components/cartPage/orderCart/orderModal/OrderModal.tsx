import ReactDOM from 'react-dom'

import styles from './OrderModal.module.css'

type ComponentType = {
    heading: string
    text: string
    onClose: () => void
    onClick: () => void
    buttonText: string
}

const OrderModal = ({ heading, text, buttonText, onClose, onClick }: ComponentType) => {
    return ReactDOM.createPortal(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h2>{heading}</h2>
                <p>{text}</p>
                <div className={styles.modalButtons}>
                    <button onClick={onClose}>Back to cart</button>
                    <button onClick={onClick} className={styles.modalHightlightButton}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default OrderModal
