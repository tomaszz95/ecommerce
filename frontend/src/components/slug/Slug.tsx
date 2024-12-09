import Link from 'next/link'

import createLinkFromProductName from '../utils/createLinkFromProductName'

import styles from './Slug.module.css'

type ComponentType = {
    category: string
    productName?: string
    uniqueId?: string
}

const Slug = ({ category, productName, uniqueId }: ComponentType) => {
    const productLink = productName ? createLinkFromProductName(productName) : null
    const categorySmall = category.toLowerCase()

    return (
        <div className={styles.slug}>
            <Link href="/" aria-label="Go to homepage">
                NeXtPC
            </Link>
            <span>&gt;</span>
            <Link href="/shop" aria-label="Go to shop page">
                Shop
            </Link>
            {category !== 'Shop' && (
                <>
                    <span>&gt;</span>
                    <Link href={`/shop/${categorySmall}`} aria-label={`Go to ${categorySmall} page`}>
                        {category}
                    </Link>
                </>
            )}
            {productName && <span>&gt;</span>}
            {productName && <Link href={`/shop/${categorySmall}/${uniqueId}/${productLink}`}> {productName}</Link>}
        </div>
    )
}

export default Slug
