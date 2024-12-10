'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import useInput from '../../hooks/useInput'

import Input from '../UI/inputs/Input'
import AuthFormButton from '../UI/buttons/AuthFormButton'

import { API_URL } from '../../constans/url'

import styles from './LoginForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LoginForm = () => {
    const [serverError, setServerError] = useState<string>('')
    const router = useRouter()

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => value.trim() !== '' && emailRegex.test(value))

    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        valueIsValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
    } = useInput((value) => value.length >= 8)

    const formIsValid = emailIsValid && passwordIsValid

    const submitHandler = async (event: FormEvent) => {
        event.preventDefault()

        const orderId = localStorage.getItem('orderId')

        if (!formIsValid) {
            setServerError('Please fill out all required fields.')
            return
        }

        setServerError('')

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    orderId: orderId,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                throw new Error(errorData.message || 'Please enter correct email and password.')
            }

            const data = await response.json()

            localStorage.setItem('userId', data.user.userId)
            localStorage.setItem('loginExpiration', (Date.now() + 60 * 60 * 1000).toString())

            if (orderId) {
                router.push('/order/delivery')
            } else {
                router.push('/')
            }
        } catch (err: any) {
            setServerError(err.message || 'Something went wrong. Please try again later.')
        }
    }

    return (
        <form className={styles.loginForm} onSubmit={submitHandler}>
            <h1>Sign in</h1>
            <Input
                label="Email"
                id="email"
                value={enteredEmail}
                hasError={emailInputHasError}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                errorText="Please provide valid email."
            />
            <Input
                label="Password"
                id="password"
                type="password"
                value={enteredPassword}
                hasError={passwordInputHasError}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                errorText="Password must be at least 8 characters long."
            />

            {serverError !== '' && <p className={styles.serverError}>{serverError}</p>}

            <AuthFormButton type="submit" formIsValid={formIsValid}>
                Sign In
            </AuthFormButton>
        </form>
    )
}

export default LoginForm
