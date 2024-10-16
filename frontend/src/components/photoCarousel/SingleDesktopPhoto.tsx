import Image from 'next/image'

import styles from './SingleDesktopPhoto.module.css'

type ComponentType = {
    photo: any
    productName: string
    onClick: () => void
}

const SingleDesktopPhoto = ({ photo, productName, onClick }: ComponentType) => {
    return (
        <div className={styles.photoWrapper} onClick={onClick}>
            <Image className={styles.photo} src={photo} alt={`${productName} photo`} />
        </div>
    )
}

export default SingleDesktopPhoto
