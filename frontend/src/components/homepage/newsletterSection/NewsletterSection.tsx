'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import XCircle from '../../../assets/icons/XCircle.png'

import styles from './NewsletterSection.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const NewsletterSection = () => {
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const submitNewsletter = () => {
        setIsFirstTime(false)

        if (inputRef.current && inputRef.current.value !== '' && emailRegex.test(inputRef.current.value)) {
            setIsEmailValid(true)

            console.log(inputRef.current.value)
        } else {
            setIsEmailValid(false)
        }
    }

    return (
        <section className={styles.newsletterSection}>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h2>Sign up for the newsletter</h2>
                    <p>Don't miss any promotion and get additional discounts</p>
                </div>
                <div className={styles.inputBox}>
                    <input
                        placeholder="Email..."
                        ref={inputRef}
                        className={`${!isFirstTime && !isEmailValid ? styles.error : ''}`}
                    />
                    {!isFirstTime && !isEmailValid && (
                        <div className={styles.errorBox}>
                            <Image src={XCircle} alt="" />
                            <p>Please provide a valid email</p>
                        </div>
                    )}
                    <button type="button" onClick={submitNewsletter}>
                        Join us!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection
