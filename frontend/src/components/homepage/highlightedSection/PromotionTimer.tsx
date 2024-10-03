'use client'

import { useState, useEffect } from 'react'

import styles from './PromotionTimer.module.css'

const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`
}

const PromotionTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
    })

    const calculateTimeLeft = () => {
        const now = new Date()
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
        const difference = endOfDay.getTime() - now.getTime()

        if (difference > 0) {
            const hours = Math.floor(difference / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            return {
                hours: formatTime(hours),
                minutes: formatTime(minutes),
                seconds: formatTime(seconds),
            }
        } else {
            return {
                hours: '00',
                minutes: '00',
                seconds: '00',
            }
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
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
