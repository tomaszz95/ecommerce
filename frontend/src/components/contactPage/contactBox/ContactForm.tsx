'use client'

import useInput from '../../../hooks/useInput'
import { useSubmitForm } from '../../../hooks/useSubmitForm'

import Modal from '../../../components/UI/modal/Modal'
import AuthFormButton from '../../UI/buttons/AuthFormButton'
import Input from '../../UI/inputs/Input'
import TextArea from '../../UI/textarea/TextArea'

import styles from './ContactForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => emailRegex.test(value))

    const {
        value: enteredSubject,
        hasError: subjectInputHasError,
        valueIsValid: subjectIsValid,
        valueChangeHandler: subjectChangeHandler,
        inputBlurHandler: subjectBlurHandler,
        reset: resetSubject,
    } = useInput((value) => value.trim() !== '' && value.length > 5)

    const {
        value: enteredMessage,
        hasError: messageInputHasError,
        valueIsValid: messageIsValid,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessage,
    } = useInput((value) => value.trim() !== '' && value.length > 10)

    const formIsValid = emailIsValid && subjectIsValid && messageIsValid

    const validateForm = () => formIsValid

    const resetForm = () => {
        resetEmail()
        resetSubject()
        resetMessage()
    }

    const { serverError, isModalVisible, isSubmitting, firstLoading, submitHandler, setIsModalVisible } = useSubmitForm(
        {
            validateForm,
            resetForm,
            errorMessage: 'Please fill out all required fields correctly.',
        },
    )

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
                errorText="The message must be at least 10 characters long."
            />

            {serverError && <p className={styles.serverError}>{serverError}</p>}

            <AuthFormButton type="submit" formIsValid={formIsValid && !isSubmitting}>
                Send
            </AuthFormButton>

            {!firstLoading && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    You`&apos;`ve successfully sent a message!
                </Modal>
            )}
        </form>
    )
}

export default ContactForm
