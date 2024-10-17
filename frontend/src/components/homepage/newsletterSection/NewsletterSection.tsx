'use client'

import { FormEvent } from 'react'

import useInput from '../../../hooks/useInput'

import Input from '../../UI/inputs/Input'
import AuthFormButton from '../../UI/buttons/AuthFormButton'

import styles from './NewsletterSection.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const NewsletterSection = () => {
    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => value.trim() !== '' && emailRegex.test(value))

    const formIsValid = emailIsValid

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        if (!formIsValid) {
            console.log('Please fill out all required fields.')
            return
        }

        console.log('Newsletter send!', { enteredEmail })
    }

    return (
        <section className={styles.newsletterSection}>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h2>Sign up for the newsletter</h2>
                    <p>Don't miss any promotion and get additional discounts</p>
                </div>
                <form className={styles.inputBox} onSubmit={submitHandler}>
                    <Input
                        label="Email"
                        id="email"
                        value={enteredEmail}
                        hasError={emailInputHasError}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        errorText="Please provide valid email."
                    />

                    <AuthFormButton type="submit" formIsValid={formIsValid}>
                        Sign In
                    </AuthFormButton>
                </form>
            </div>
        </section>
    )
}

export default NewsletterSection
