'use client'

import { FormEvent, useState } from 'react'

import useInput from '../../hooks/useInput'
import Input from '../UI/inputs/Input'
import AuthFormButton from '../UI/buttons/AuthFormButton'
import Modal from '../UI/Modal/Modal'

import { userType } from '../../types/types'

import styles from './UserSettingsForm.module.css'

type ComponentType = {
    userData: userType
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const UserSettingsForm = ({ userData }: ComponentType) => {
    const [serverError, setServerError] = useState('')
    const [isNewData, setIsNewData] = useState(false)
    const [firstLoading, setFirstLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueIsValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput((value) => value.trim() !== '', userData.credentials.name || '')

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => value.trim() !== '' && emailRegex.test(value), userData.credentials.email || '')

    const {
        value: enteredAddress,
        hasError: addressInputHasError,
        valueIsValid: addressIsValid,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
    } = useInput((value) => value.trim() !== '', userData.informations.address || '')

    const {
        value: enteredPostalCode,
        hasError: postalCodeInputHasError,
        valueIsValid: postalCodeIsValid,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
    } = useInput((value) => value.trim() !== '', userData.informations.postalCode || '')

    const {
        value: enteredCity,
        hasError: cityInputHasError,
        valueIsValid: cityIsValid,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
    } = useInput((value) => value.trim() !== '', userData.informations.city || '')

    const {
        value: enteredPhone,
        hasError: phoneInputHasError,
        valueIsValid: phoneIsValid,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
    } = useInput((value) => value.trim() !== '', userData.informations.phone || '')

    const formIsValid =
        nameIsValid && emailIsValid && addressIsValid && postalCodeIsValid && cityIsValid && phoneIsValid

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        setIsSubmitting(true)
        setFirstLoading(false)

        if (!formIsValid) {
            setServerError('Please fill out all required fields correctly.')
            setIsSubmitting(false)
            return
        }

        try {
            setIsNewData(true)
            setServerError('')

            setTimeout(() => {
                setIsNewData(false)
                setIsSubmitting(false)
            }, 3500)
        } catch (err) {
            setServerError('Something went wrong. Please try again later.')
            setIsSubmitting(false)
        }
    }

    return (
        <form className={styles.settingsContainer} onSubmit={submitHandler}>
            <h2>Your data</h2>
            <div>
                <h3>Name:</h3>
                <Input
                    label="Name"
                    id="name"
                    value={enteredName}
                    hasError={nameInputHasError}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    errorText="Please enter your name."
                />
            </div>
            <div>
                <h3>Email:</h3>
                <Input
                    label="Email"
                    id="email"
                    value={enteredEmail}
                    hasError={emailInputHasError}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    errorText="Please provide a valid email."
                    type="email"
                />
            </div>
            <div>
                <h3>Address:</h3>
                <Input
                    label="Address"
                    id="address"
                    value={enteredAddress}
                    hasError={addressInputHasError}
                    onChange={addressChangeHandler}
                    onBlur={addressBlurHandler}
                    errorText="Please enter your address."
                />
            </div>
            <div>
                <h3>Postal Code:</h3>
                <Input
                    label="Postal Code"
                    id="postalCode"
                    value={enteredPostalCode}
                    hasError={postalCodeInputHasError}
                    onChange={postalCodeChangeHandler}
                    onBlur={postalCodeBlurHandler}
                    errorText="Please enter your postal code."
                />
            </div>
            <div>
                <h3>City:</h3>
                <Input
                    label="City"
                    id="city"
                    value={enteredCity}
                    hasError={cityInputHasError}
                    onChange={cityChangeHandler}
                    onBlur={cityBlurHandler}
                    errorText="Please enter your city."
                />
            </div>
            <div>
                <h3>Phone Number:</h3>
                <Input
                    label="Phone Number"
                    id="phone"
                    value={enteredPhone}
                    hasError={phoneInputHasError}
                    onChange={phoneChangeHandler}
                    onBlur={phoneBlurHandler}
                    errorText="Please enter your phone number."
                    type="tel"
                />
            </div>

            {serverError && <p className={styles.serverError}>{serverError}</p>}

            <AuthFormButton type="submit" formIsValid={formIsValid && !isSubmitting}>
                Save Changes
            </AuthFormButton>

            {!firstLoading && (
                <Modal isVisible={isNewData} onAnimationEnd={() => setIsNewData(false)}>
                    User data has been changed
                </Modal>
            )}
        </form>
    )
}

export default UserSettingsForm
