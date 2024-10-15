import Image from 'next/image'

import styles from './SinglePhoto.module.css'

type ComponentType = {
    photo: any
    productName: string
}

const SinglePhoto = ({ photo, productName }: ComponentType) => {
    return <Image className={styles.photo} src={photo} alt={`${productName} photo`} />
}

export default SinglePhoto
