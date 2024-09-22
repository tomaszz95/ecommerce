import CtaLink from '../../../components/UI/CtaLink'

import styles from './HeroImage.module.css'

const HeroImage = () => {
    return (
        <section className={styles.heroImageSection}>
            <div className={styles.heroImagePhoto} />
            <div className={styles.heroImageShadow} />
            <div className={styles.heroImageText}>
                <h1>New gaming laptop</h1>
                <p>Best price, best equipment, best opportunity.</p>
                <CtaLink width="200px" href="/">
                    Check now!
                </CtaLink>
            </div>
        </section>
    )
}

export default HeroImage
