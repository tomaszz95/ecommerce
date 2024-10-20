import Image, { StaticImageData } from 'next/image'

import styles from './SinglePhoto.module.css'

type ComponentType = {
    photo: StaticImageData
    productName: string
}

const SinglePhoto = ({ photo, productName }: ComponentType) => {
    return <Image className={styles.photo} src={photo} alt={`${productName} photo`} />
}

export default SinglePhoto
