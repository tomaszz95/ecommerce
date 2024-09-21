import styles from './HeroImage.module.css'

const HeroImage = () => {
    return (
        <section className={styles.heroImageSection}>
            <div className={styles.heroImagePhoto} />
            <div className={styles.heroImageShadow} />
            <div className={styles.heroImageText}>
                <h1>New gaming laptop</h1>
                <p>Best offer, best prices, check it now!</p>
            </div>
        </section>
    )
}

export default HeroImage
