import { useEffect } from 'react'

import ReactDOM from 'react-dom'

import styles from './ToastNotification.module.css'

type ComponentType = {
    message: string
    onClose: () => void
}

const ToastNotification = ({ message, onClose }: ComponentType) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000)
        return () => clearTimeout(timer)
    }, [onClose])

    return ReactDOM.createPortal(
        <div className={styles.toastContainer}>
            <div className={styles.toast}>{message}</div>
        </div>,
        document.body,
    )
}

export default ToastNotification
