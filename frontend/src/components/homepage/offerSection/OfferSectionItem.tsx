import Image from 'next/image'

import HightlightButton from '../../UI/buttons/HightlightButton'

import styles from './OfferSectionItem.module.css'

type ComponentType = { name: string; link: string; photo: any }

const OfferSectionItem = ({ name, photo, link }: ComponentType) => {
    return (
        <div className={styles.offerSectionHero}>
            <Image src={photo} alt="" aria-label={`Hero ${name} section`} />
            <div className={styles.offerSectionShadow} />
            <h3 className={styles.offerSectionText}>
                <p>{name}</p>
                <HightlightButton href={link}>Check more &gt;</HightlightButton>
            </h3>
        </div>
    )
}

export default OfferSectionItem
