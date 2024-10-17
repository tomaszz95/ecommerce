'use client'

import { FormEvent } from 'react'

import useInput from '../../hooks/useInput'

import AuthFormButton from '../UI/buttons/AuthFormButton'
import Input from '../UI/inputs/Input'
import TextArea from '../UI/textarea/TextArea'

import styles from './ContactForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => emailRegex.test(value))

    const {
        value: enteredSubject,
        hasError: subjectInputHasError,
        valueIsValid: subjectIsValid,
        valueChangeHandler: subjectChangeHandler,
        inputBlurHandler: subjectBlurHandler,
    } = useInput((value) => value.trim() !== '' && value.length > 5)

    const {
        value: enteredMessage,
        hasError: messageInputHasError,
        valueIsValid: messageIsValid,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
    } = useInput((value) => value.trim() !== '' && value.length > 20)

    const formIsValid = emailIsValid && subjectIsValid && messageIsValid

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        if (!formIsValid) {
            console.log('Please fill out all required fields correctly.')
            return
        }

        console.log('Form submitted!', { enteredEmail, enteredSubject, enteredMessage })
    }

    return (
        <form className={styles.contactForm} onSubmit={submitHandler}>
            <h2>Send us your inquiry</h2>
            <h3>We will respond as soon as possible</h3>
            <Input
                label="E-mail"
                id="email"
                value={enteredEmail}
                hasError={emailInputHasError}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                errorText="Please provide a valid email."
            />
            <Input
                label="Question subject"
                id="subject"
                value={enteredSubject}
                hasError={subjectInputHasError}
                onChange={subjectChangeHandler}
                onBlur={subjectBlurHandler}
                errorText="The question subject must be at least 5 characters long."
            />
            <TextArea
                label="Your message"
                id="message"
                value={enteredMessage}
                hasError={messageInputHasError}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                errorText="The message must be at least 20 characters long."
            />
            
            <AuthFormButton type="submit" formIsValid={formIsValid}>
                Send
            </AuthFormButton>
        </form>
    )
}

export default ContactForm
