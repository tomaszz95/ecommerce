import Link from 'next/link'

import styles from './HeroImage.module.css'

type ComponentType = {
    imgType: string
    bigText: string
    smallText: string
    link: string
    linkText: string
    h1Header: string
}

const HeroImage = ({ imgType, bigText, smallText, link, linkText, h1Header }: ComponentType) => {
    return (
        <section className={styles.heroImageSection}>
            <div className={`${styles.heroImagePhoto} ${imgType === 'main' ? styles.main : styles.encourage}`} />
            <div className={styles.heroImageShadow} />
            <div className={styles.heroImageText}>
                {h1Header === 'true' ? <h1>{bigText}</h1> : <h2>{bigText}</h2>}
                <p>{smallText}</p>
                <Link className={styles.heroImageLink} href={link}>
                    {linkText}
                </Link>
            </div>
        </section>
    )
}

export default HeroImage