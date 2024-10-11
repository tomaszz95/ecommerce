'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import XCircle from '../../assets/icons/xcircle.png'

import styles from './LoginForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LoginForm = () => {
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)

    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const handleEmailChange = () => {
        const emailValue = inputEmailRef.current?.value || ''
        const isValid = emailValue !== '' && emailRegex.test(emailValue)

        setIsEmailValid(isValid)
    }

    const handlePasswordChange = () => {
        const passwordValue = inputPasswordRef.current?.value || ''
        const isValid = passwordValue.length >= 8

        setIsPasswordValid(isValid)
    }

    const submitInputs = (e: React.FormEvent) => {
        e.preventDefault()

        setIsFirstTime(false)

        if (isEmailValid && isPasswordValid) {
            console.log('wsio gra')
        } else {
            console.log('nie gra')
        }
    }

    return (
        <form className={styles.loginForm} onSubmit={submitInputs}>
            <h1>Sign in</h1>
            <div>
                <input
                    placeholder="Email"
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
                    placeholder="Password"
                    type="password"
                    ref={inputPasswordRef}
                    onChange={handlePasswordChange}
                    className={!isFirstTime && !isPasswordValid ? styles.error : ''}
                />
                {!isFirstTime && !isPasswordValid && (
                    <div className={styles.errorBox}>
                        <Image src={XCircle} alt="" />
                        <p>Please provide valid password (at least 8 characters)</p>
                    </div>
                )}
            </div>
            <button type="submit">Sign In</button>
        </form>
    )
}

export default LoginForm
