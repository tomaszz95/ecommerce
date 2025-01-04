import { API_URL } from '../../../constans/url'

import styles from './PresentationItem.module.css'

type ComponentType = {
    text: string
    img: string
    title: string
}

const PresentationItem = ({ text, img, title }: ComponentType) => {
    return (
        <div className={styles.presentationItem}>
            <div className={styles.presentationItemText}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <img
                src={`${API_URL}/photos/${img}`}
                width={1000}
                height={1000}
                alt={`${title} photo`}
                aria-label={`${title} photo`}
                crossOrigin="anonymous"
            />
        </div>
    )
}

export default PresentationItem
