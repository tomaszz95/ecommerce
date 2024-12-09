import Image from 'next/image'

import { API_URL } from '../../../constans/url'

import styles from './SingleDesktopPhoto.module.css'

type ComponentType = {
    photo: string
    productName: string
    onClick: () => void
}

const SingleDesktopPhoto = ({ photo, productName, onClick }: ComponentType) => {
    return (
        <div className={styles.photoWrapper} onClick={onClick}>
            <Image
                className={styles.photo}
                src={`${API_URL}/photos/${photo}`}
                width={1000}
                height={1000}
                alt={`${productName} photo`}
            />
        </div>
    )
}

export default SingleDesktopPhoto
