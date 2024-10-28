import Link from 'next/link'
import createLinkFromProductName from '../utils/createLinkFromProductName'

import styles from './Slug.module.css'

type ComponentType = {
    categoryLink: string
    categoryName: string
    productName?: string
}

const Slug = ({ categoryLink, productName, categoryName }: ComponentType) => {
    const productLink = productName ? createLinkFromProductName(productName) : null

    return (
        <div className={styles.slug}>
            <Link href="/">NeXtPC </Link> <span>&gt;</span>
            <Link href={categoryLink}> {categoryName} </Link> {productLink && <span>&gt;</span>}
            {productLink && <Link href={`${categoryLink}/${productLink}`}> {productName}</Link>}
        </div>
    )
}

export default Slug
