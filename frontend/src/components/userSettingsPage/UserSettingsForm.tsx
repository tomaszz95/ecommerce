import { useEffect, useState } from 'react'

import { useSubmitForm } from '../../hooks/useSubmitForm'
import useInput from '../../hooks/useInput'

import Input from '../UI/inputs/Input'
import Modal from '../UI/modal/Modal'
import AuthFormButton from '../UI/buttons/AuthFormButton'

import { userSettingType } from '../../types/types'

import { API_URL } from '../../constans/url'

import { emailRegex, addressRegex, postalCodeRegex, phoneRegex } from '../../constans/dataRegexCheck'

import styles from './UserSettingsForm.module.css'

type ComponentType = {
    userData: userSettingType
}

const UserSettingsForm = ({ userData }: ComponentType) => {
    const [isModified, setIsModified] = useState(false)
    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueIsValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput((value) => value.trim().length > 2, userData.name || '')

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => emailRegex.test(value.trim()), userData.email || '')

    const {
        value: enteredAddress,
        hasError: addressInputHasError,
        valueIsValid: addressIsValid,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddress,
    } = useInput((value) => addressRegex.test(value.trim()), userData.informations.address || '')

    const {
        value: enteredPostalCode,
        hasError: postalCodeInputHasError,
        valueIsValid: postalCodeIsValid,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
        reset: resetPostalCode,
    } = useInput((value) => postalCodeRegex.test(value.trim()), userData.informations.postalCode || '')

    const {
        value: enteredCity,
        hasError: cityInputHasError,
        valueIsValid: cityIsValid,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity,
    } = useInput((value) => value.trim() !== '', userData.informations.city || '')

    const {
        value: enteredPhone,
        hasError: phoneInputHasError,
        valueIsValid: phoneIsValid,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
    } = useInput((value) => phoneRegex.test(value.trim()), userData.informations.phone || '')

    useEffect(() => {
        const hasChanged =
            enteredName !== userData.name ||
            enteredEmail !== userData.email ||
            enteredAddress !== userData.informations.address ||
            enteredPostalCode !== userData.informations.postalCode ||
            enteredCity !== userData.informations.city ||
            enteredPhone !== userData.informations.phone

        setIsModified(hasChanged)
    }, [enteredName, enteredEmail, enteredAddress, enteredPostalCode, enteredCity, enteredPhone, userData])

    const formIsValid =
        nameIsValid && emailIsValid && addressIsValid && postalCodeIsValid && cityIsValid && phoneIsValid && isModified

    const validateForm = () => formIsValid

    const resetForm = () => {
        resetName()
        resetEmail()
        resetAddress()
        resetPostalCode()
        resetCity()
        resetPhone()
        setIsModified(false)
    }

    const submitUserDataHandler = async (formData: {
        name: string
        email: string
        address: string
        postalCode: string
        city: string
        phone: string
    }) => {
        const response = await fetch(`${API_URL}/api/users/updateUser`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: 'include',
        })

        if (!response.ok) {
            const errorData = await response.json()

            throw new Error(errorData.msg || 'Please enter correct data.')
        }
    }

    const { serverError, isModalVisible, isSubmitting, firstLoading, submitHandler, setIsModalVisible } = useSubmitForm(
        {
            validateForm,
            resetForm,
            errorMessage: 'Please fill out all required fields correctly.',
            onSubmit: submitUserDataHandler,
        },
    )

    const formSubmitHandler = (event: React.FormEvent) => {
        submitHandler(event, {
            name: enteredName,
            email: enteredEmail,
            address: enteredAddress,
            postalCode: enteredPostalCode,
            city: enteredCity,
            phone: enteredPhone,
        })
    }

    return (
        <form className={styles.settingsContainer} onSubmit={formSubmitHandler}>
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

            <AuthFormButton type="submit" formIsValid={formIsValid && !isSubmitting && !isModalVisible}>
                Save Changes
            </AuthFormButton>

            {!firstLoading && !isSubmitting && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    {serverError ? serverError : 'Your data has been updated!'}
                </Modal>
            )}
        </form>
    )
}

export default UserSettingsForm
