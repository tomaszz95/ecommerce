'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

import XCircle from '../../assets/icons/xcircle.png'

import styles from './LoginForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LoginForm = () => {
    const [isLoginValid, setIsLoginValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)
    const inputLoginRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const submitInputs = (e: React.FormEvent) => {
        e.preventDefault()

        setIsFirstTime(false)

        if (inputLoginRef.current && inputLoginRef.current.value !== '') {
            setIsLoginValid(true)
        } else {
            setIsLoginValid(false)
        }

        if (inputPasswordRef.current && inputPasswordRef.current.value !== '') {
            setIsPasswordValid(true)
        } else {
            setIsPasswordValid(false)
        }
    }

    return (
        <form className={styles.loginForm} onSubmit={submitInputs}>
            <h1>Sign in</h1>
            <div>
                <input placeholder="Email or nickname" ref={inputLoginRef} />
                {!isFirstTime && !isLoginValid && (
                    <div className={styles.errorBox}>
                        <Image src={XCircle} alt="" />
                        <p>Please provide email or nickname</p>
                    </div>
                )}
            </div>
            <div>
                <input placeholder="Password" type="password" ref={inputPasswordRef} />
                {!isFirstTime && !isPasswordValid && (
                    <div className={styles.errorBox}>
                        <Image src={XCircle} alt="" />
                        <p>Please provide a valid password</p>
                    </div>
                )}
            </div>
            <button type="submit">Sign In</button>
        </form>
    )
}

export default LoginForm
