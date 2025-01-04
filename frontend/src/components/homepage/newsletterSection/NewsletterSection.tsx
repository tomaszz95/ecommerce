'use client'

import useInput from '../../../hooks/useInput'

import Input from '../../UI/inputs/Input'
import AuthFormButton from '../../UI/buttons/AuthFormButton'
import Modal from '../../UI/modal/Modal'
import { useSubmitForm } from '../../../hooks/useSubmitForm'

import { emailRegex } from '../../../constans/dataRegexCheck'

import styles from './NewsletterSection.module.css'

const NewsletterSection = () => {
    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => value.trim() !== '' && emailRegex.test(value))

    const formIsValid = emailIsValid

    const validateForm = () => formIsValid

    const resetForm = () => {
        resetEmail()
    }

    const { isModalVisible, isSubmitting, firstLoading, submitHandler, setIsModalVisible } = useSubmitForm({
        validateForm,
        resetForm,
        errorMessage: 'Please fill out all required fields correctly.',
    })

    return (
        <section className={styles.newsletterSection}>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h2>Sign up for the newsletter</h2>
                    <p>Don&apos;t miss any promotion and get additional discounts</p>
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

                    <AuthFormButton type="submit" formIsValid={formIsValid && !isSubmitting}>
                        Sign In
                    </AuthFormButton>
                </form>
            </div>

            {!firstLoading && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    You&apos;ve successfully subscribed to the newsletter!
                </Modal>
            )}
        </section>
    )
}

export default NewsletterSection
