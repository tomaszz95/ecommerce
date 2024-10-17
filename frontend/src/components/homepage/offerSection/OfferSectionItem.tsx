import Image from 'next/image'

import HightlightButton from '../../UI/buttons/HightlightButton'

import styles from './OfferSectionItem.module.css'

type ComponentType = { name: string; link: string; photo: any }

const OfferSectionItem = ({ name, photo, link }: ComponentType) => {
    return (
        <div className={styles.offerSectionHero}>
            <Image src={photo} alt="" />
            <div className={styles.offerSectionShadow} />
            <h3 className={styles.offerSectionText}>{name}</h3>
            <HightlightButton href={link}>Check more &gt;</HightlightButton>
        </div>
    )
}

export default OfferSectionItem
