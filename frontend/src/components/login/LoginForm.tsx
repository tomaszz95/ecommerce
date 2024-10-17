'use client'

import { FormEvent } from 'react'

import useInput from '../../hooks/useInput'

import Input from '../UI/inputs/Input'
import AuthFormButton from '../UI/buttons/AuthFormButton'

import styles from './LoginForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LoginForm = () => {
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

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        if (!formIsValid) {
            console.log('Please fill out all required fields.')
            return
        }

        console.log('Login successful!', { enteredEmail, enteredPassword })
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

            <AuthFormButton type="submit" formIsValid={formIsValid}>
                Sign In
            </AuthFormButton>
        </form>
    )
}

export default LoginForm
