import Image from 'next/image'
import Link from 'next/link'

import styles from './SingleProduct.module.css'

type ComponentType = {
    name: string
    prodId: string
    mainImage: any
    category: string
    price: number
}

const SingleProduct = ({ name, prodId, mainImage, category, price }: ComponentType) => {
    return (
        <Link className={styles.item} key={name} href={`/product/${prodId}`}>
            <Image src={mainImage} alt={name} />
            <p>{category}</p>
            <h3>{name}</h3>
            <span>{price}$</span>
        </Link>
    )
}

export default SingleProduct
