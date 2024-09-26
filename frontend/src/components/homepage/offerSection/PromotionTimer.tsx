import styles from './PromotionTimer.module.css'

const PromotionTimer = () => {
    return (
        <div className={styles.promotionTimerBox}>
            <div className={styles.promotionTimerContainer}>
                <span className={styles.promotionTimerValue}>22</span>
                <span className={styles.promotionTimerUnit}>h</span>
            </div>
            <div className={styles.promotionTimerContainer}>
                <span className={styles.promotionTimerValue}>22</span>
                <span className={styles.promotionTimerUnit}>min</span>
            </div>
            <div className={styles.promotionTimerContainer}>
                <span className={styles.promotionTimerValue}>22</span>
                <span className={styles.promotionTimerUnit}>sec</span>
            </div>
        </div>
    )
}

export default PromotionTimer
