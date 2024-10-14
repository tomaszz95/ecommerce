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
        <div>
            <a href="/">NeXtPC </a> <span>&gt;</span>
            <a href={`${categoryLink}`}> {categoryName} </a> <span>&gt;</span>
            {productLink && <a href={`${categoryLink}/${productLink}`}> {productName}</a>}
        </div>
    )
}

export default Slug
