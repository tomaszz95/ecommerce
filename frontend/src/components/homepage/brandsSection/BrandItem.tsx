import Image from 'next/image'
import Link from 'next/link'

import styles from './BrandItem.module.css'

type ComponentType = {
    brand: string
    logo: any
}

const BrandItem = ({ brand, logo }: ComponentType) => {
    return (
        <Link href={`/shop&brand=${brand}`} className={styles.logoLink}>
            <Image src={logo} alt={`${brand} logo`} />
        </Link>
    )
}

export default BrandItem