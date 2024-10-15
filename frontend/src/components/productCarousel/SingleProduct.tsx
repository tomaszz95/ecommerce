import Image from 'next/image'
import Link from 'next/link'
import createLinkFromProductName from '../utils/createLinkFromProductName'

import styles from './SingleProduct.module.css'

type ComponentType = {
    name: string
    prodId: string
    mainImage: any
    category: string
    categoryLink: string
    price: number
    size?: string
}

const SingleProduct = ({ name, prodId, mainImage, category, price, size, categoryLink }: ComponentType) => {
    const linkSize = size === 'small' ? styles.small : size === 'big' ? styles.big : ''
    const productLink = createLinkFromProductName(name)

    return (
        <Link className={`${styles.item} ${linkSize}`} key={name} href={`${categoryLink}/${productLink}`}>
            <Image src={mainImage} alt={name} />
            <p>{category}</p>
            <h3>{name}</h3>
            <span>{price}$</span>
        </Link>
    )
}

export default SingleProduct
