import Image from 'next/image'
import { productPresentationDummyType } from '../../../types/types'

import styles from './PresentationItem.module.css'

const PresentationItem = ({ text, img, title }: productPresentationDummyType) => {
    return (
        <div className={styles.presentationItem}>
            <div className={styles.presentationItemText}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <Image src={img} alt={`${title} photo`} />
        </div>
    )
}

export default PresentationItem
