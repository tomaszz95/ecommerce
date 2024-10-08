'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import XCircle from '../../assets/icons/xcircle.png'

import styles from './RegisterForm.module.css'
import FormalConsents from './FormalConsents'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RegisterForm = () => {
    const [isNameValid, setIsNameValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [areConsentsAgreed, setAreConsentsAgreed] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)

    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const handleNameChange = () => {
        const nameValue = inputNameRef.current?.value || ''
        const isValid = nameValue !== ''

        setIsNameValid(isValid)
    }

    const handleEmailChange = () => {
        const emailValue = inputEmailRef.current?.value || ''
        const isValid = emailRegex.test(emailValue)

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

        if (isNameValid && isEmailValid && isPasswordValid && areConsentsAgreed) {
            console.log('Formularz został poprawnie wypełniony.')
        } else {
            console.log('Wypełnij wszystkie wymagane pola.')
        }
    }

    return (
        <form className={styles.registerForm} onSubmit={submitInputs}>
            <h1>Register</h1>
            <div>
                <input
                    placeholder="Name"
                    ref={inputNameRef}
                    onChange={handleNameChange}
                    className={!isFirstTime && !isNameValid ? styles.error : ''}
                />
                {!isFirstTime && !isNameValid && (
                    <div className={styles.errorBox}>
                        <Image src={XCircle} alt="" />
                        <p>Name cannot be empty</p>
                    </div>
                )}
            </div>
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
                        <p>Password must have at least 8 characters</p>
                    </div>
                )}
            </div>
            <FormalConsents
                onConsentsAgree={setAreConsentsAgreed}
                isConsentError={!areConsentsAgreed && !isFirstTime}
            />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm
