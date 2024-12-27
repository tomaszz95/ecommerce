import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { FRONTEND_URL } from '../../../constans/url'

import styles from './BrandItem.module.css'

type ComponentType = {
    brand: string
    logo: StaticImageData
}

const BrandItem = ({ brand, logo }: ComponentType) => {
    const brandName = brand.charAt(0).toUpperCase() + brand.slice(1)

    return (
        <Link
            href={`${FRONTEND_URL}/shop?page=1&company=${brandName}`}
            className={styles.logoLink}
            aria-label={`${brand} company logo`}
        >
            <Image src={logo} alt={`${brand} logo`} />
        </Link>
    )
}

export default BrandItem
