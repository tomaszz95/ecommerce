'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import XCircle from '../../assets/icons/xcircle.png'

import styles from './ContactForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isSubjectValid, setIsSubjectValid] = useState(false)
    const [isTextAreaValid, setIsTextAreaValid] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)

    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputSubjectRef = useRef<HTMLInputElement>(null)
    const inputTextAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleEmailChange = () => {
        const emailValue = inputEmailRef.current?.value || ''
        const isValid = emailValue !== '' && emailRegex.test(emailValue)

        setIsEmailValid(isValid)
    }

    const handleSubjectChange = () => {
        const topicValue = inputSubjectRef.current?.value || ''
        const isValid = topicValue !== '' && topicValue.length > 5

        setIsSubjectValid(isValid)
    }

    const handleTextAreaChange = () => {
        const textareaValue = inputTextAreaRef.current?.value || ''
        const isValid = textareaValue !== '' && textareaValue.length > 20

        setIsTextAreaValid(isValid)
    }

    const submitInputs = (e: React.FormEvent) => {
        e.preventDefault()

        setIsFirstTime(false)

        if (isEmailValid && isSubjectValid && isTextAreaValid) {
            console.log('wsio gra')
        } else {
            console.log('nie gra')
        }
    }

    return (
        <form className={styles.contactForm} onSubmit={submitInputs}>
            <h2>Send us your inquiry</h2>
            <h3>We will respond as soon as possible</h3>
            <div>
                <input
                    placeholder="E-mail"
                    ref={inputEmailRef}
                    onChange={handleEmailChange}
                    className={!isFirstTime && !isEmailValid ? styles.error : ''}
                />
                {!isFirstTime && !isEmailValid && (
                    <div className={styles.errorBox}>
                        <Image src={XCircle} alt="" />
                        <p>Please provide valid email</p>
                    </div>
                )}
            </div>
            <div>
                <input
                    placeholder="Question subject"
                    type="password"
                    ref={inputSubjectRef}
                    onChange={handleSubjectChange}
                    className={!isFirstTime && !isSubjectValid ? styles.error : ''}
                />
                {!isFirstTime && !isSubjectValid && (
                    <div className={styles.errorBox}>
                        <Image src={XCircle} alt="" />
                        <p>The question subject must be at least 5 characters long</p>
                    </div>
                )}
            </div>
            <div>
                <textarea
                    placeholder="Your message"
                    ref={inputTextAreaRef}
                    onChange={handleTextAreaChange}
                    className={!isFirstTime && !isTextAreaValid ? styles.error : ''}
                />
                {!isFirstTime && !isTextAreaValid && (
                    <div className={styles.errorBox}>
                        <Image src={XCircle} alt="" />
                        <p>The message must be at least 20 characters long</p>
                    </div>
                )}
            </div>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactForm
