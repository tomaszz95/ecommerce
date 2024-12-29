'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import useInput from '../../hooks/useInput'

import Input from '../UI/inputs/Input'
import FormalConsents from './consents/FormalConsents'
import AuthFormButton from '../UI/buttons/AuthFormButton'

import { API_URL } from '../../constans/url'

import { emailRegex } from '../../constans/dataRegexCheck'

import styles from './RegisterForm.module.css'

type ComponentType = {
    orderId?: string
}

const RegisterForm = ({ orderId }: ComponentType) => {
    const [serverError, setServerError] = useState('')
    const router = useRouter()

    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueIsValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput((value) => value.trim().length > 2)

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => emailRegex.test(value))

    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        valueIsValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
    } = useInput((value) => value.length >= 8)

    const [areConsentsAgreed, setAreConsentsAgreed] = useState(false)

    const formIsValid = nameIsValid && emailIsValid && passwordIsValid && areConsentsAgreed

    const submitHandler = async (event: FormEvent) => {
        event.preventDefault()

        const orderIdent = orderId || localStorage.getItem('orderId')

        if (!formIsValid) {
            setServerError('Please fill out all required fields.')
            return
        }

        setServerError('')

        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    name: enteredName,
                    password: enteredPassword,
                    orderId: orderIdent,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                throw new Error(errorData.msg || 'Please enter correct email, name and password.')
            }

            if (orderId) {
                router.push(`/order/delivery/${orderId}`)
            } else {
                router.push('/')
            }
        } catch (err: any) {
            setServerError(err.message || 'Something went wrong. Please try again later.')
        }
    }

    return (
        <form className={styles.registerForm} onSubmit={submitHandler}>
            <h1>Register</h1>
            <Input
                label="Name"
                id="name"
                value={enteredName}
                hasError={nameInputHasError}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                errorText="Name cannot be empty."
            />
            <Input
                label="Email"
                id="email"
                value={enteredEmail}
                hasError={emailInputHasError}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                errorText="Please enter a valid email address."
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
            <FormalConsents onConsentsAgree={setAreConsentsAgreed} />

            {serverError !== '' && <p className={styles.serverError}>{serverError}</p>}

            <AuthFormButton type="submit" formIsValid={formIsValid}>
                Register
            </AuthFormButton>
        </form>
    )
}

export default RegisterForm
