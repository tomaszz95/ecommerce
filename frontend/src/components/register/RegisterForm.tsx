'use client'

import { FormEvent, useState } from 'react'

import useInput from '../../hooks/useInput'

import FormalConsents from './consents/FormalConsents'
import AuthFormButton from '../UI/buttons/AuthFormButton'
import Input from '../UI/inputs/Input'

import styles from './RegisterForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RegisterForm = () => {
    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueIsValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput((value) => value.trim() !== '')

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

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        if (!formIsValid) {
            console.log('Please fill out all required fields and agree to the terms.')
            return
        }

        console.log('Form submitted!', { enteredName, enteredEmail, enteredPassword })
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

            <AuthFormButton type="submit" formIsValid={formIsValid}>
                Register
            </AuthFormButton>
        </form>
    )
}

export default RegisterForm
