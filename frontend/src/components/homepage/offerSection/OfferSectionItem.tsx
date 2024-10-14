import Image from 'next/image'
import Link from 'next/link'

import styles from './OfferSectionItem.module.css'

type ComponentType = { name: string; link: string; photo: any }

const OfferSectionItem = ({ name, photo, link }: ComponentType) => {
    return (
        <div className={styles.offerSectionHero}>
            <Image src={photo} alt="" />
            <div className={styles.offerSectionShadow} />
            <h3 className={styles.offerSectionText}>{name}</h3>
            <Link className={styles.offerSectionLink} href={link}>
                Check more &gt;
            </Link>
        </div>
    )
}

export default OfferSectionItem
