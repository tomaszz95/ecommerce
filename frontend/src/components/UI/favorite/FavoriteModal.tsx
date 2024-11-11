import ReactDOM from 'react-dom'
import styles from './FavoriteModal.module.css'

const FavoriteModal = ({ children, isExiting }: { children: React.ReactNode; isExiting: boolean }) => {
    return ReactDOM.createPortal(
        <div className={`${styles.modal} ${isExiting ? styles.slideOut : ''}`}>
            <p>{children}</p>
        </div>,
        document.body,
    )
}

export default FavoriteModal
