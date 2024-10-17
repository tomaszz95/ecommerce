import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import styles from './HeaderItem.module.css'

type ComponentType = {
    icon: StaticImageData
    text: string
    href: string
}

const HeaderItem = ({ icon, text, href }: ComponentType) => {
    return (
        <Link className={styles.headerItem} href={href}>
            <Image src={icon} alt="" />
            <p>{text}</p>
        </Link>
    )
}

export default HeaderItem
