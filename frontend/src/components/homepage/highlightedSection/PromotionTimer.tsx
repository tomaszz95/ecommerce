'use client'

import countdownToMidnight from '../../utils/countdownToMidnight'
import { useState, useEffect } from 'react'

import styles from './PromotionTimer.module.css'

const PromotionTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(countdownToMidnight())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className={styles.promotionTimerBox}>
            <div className={styles.promotionTimerContainer}>
                <span className={styles.promotionTimerValue}>{timeLeft.hours}</span>
                <span className={styles.promotionTimerUnit}>h</span>
            </div>
            <div className={styles.promotionTimerContainer}>
                <span className={styles.promotionTimerValue}>{timeLeft.minutes}</span>
                <span className={styles.promotionTimerUnit}>min</span>
            </div>
            <div className={styles.promotionTimerContainer}>
                <span className={styles.promotionTimerValue}>{timeLeft.seconds}</span>
                <span className={styles.promotionTimerUnit}>sec</span>
            </div>
        </div>
    )
}

export default PromotionTimer
