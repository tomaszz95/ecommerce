import { useEffect } from 'react'

import useInput from '../../../hooks/useInput'

import Input from '../../UI/inputs/Input'

import { emailRegex, addressRegex, postalCodeRegex, phoneRegex } from '../../../constans/dataRegexCheck'

import styles from './DeliveryForm.module.css'

type ComponentType = {
    deliveryInputsData: {
        enteredCity: string
        enteredEmail: string
        enteredName: string
        enteredPhone: string
        enteredPostalCode: string
        enteredStreet: string
    }
    fieldErrors: Record<string, string>
    onFormValidationChange: (
        isValid: boolean,
        deliveryData: {
            enteredCity: string
            enteredEmail: string
            enteredName: string
            enteredPhone: string
            enteredPostalCode: string
            enteredStreet: string
        },
    ) => void
}

const DeliveryForm = ({ onFormValidationChange, deliveryInputsData, fieldErrors }: ComponentType) => {
    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueIsValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput((value) => value.trim().length > 2, deliveryInputsData.enteredName || '')

    const {
        value: enteredStreet,
        hasError: streetInputHasError,
        valueIsValid: streetIsValid,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
    } = useInput((value) => addressRegex.test(value.trim()), deliveryInputsData.enteredStreet || '')

    const {
        value: enteredPostalCode,
        hasError: postalCodeInputHasError,
        valueIsValid: postalCodeIsValid,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
    } = useInput((value) => postalCodeRegex.test(value.trim()), deliveryInputsData.enteredPostalCode || '')

    const {
        value: enteredCity,
        hasError: cityInputHasError,
        valueIsValid: cityIsValid,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
    } = useInput((value) => value.trim() !== '', deliveryInputsData.enteredCity || '')

    const {
        value: enteredPhone,
        hasError: phoneInputHasError,
        valueIsValid: phoneIsValid,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
    } = useInput((value) => phoneRegex.test(value.trim()), deliveryInputsData.enteredPhone || '')

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => emailRegex.test(value.trim()), deliveryInputsData.enteredEmail || '')

    const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid && phoneIsValid && emailIsValid

    useEffect(() => {
        const inputsData = {
            enteredName,
            enteredStreet,
            enteredPostalCode,
            enteredCity,
            enteredPhone,
            enteredEmail,
        }

        onFormValidationChange(formIsValid, inputsData)
    }, [
        formIsValid,
        enteredName,
        enteredStreet,
        enteredPostalCode,
        enteredCity,
        enteredPhone,
        enteredEmail,
        onFormValidationChange,
    ])

    return (
        <form className={styles.deliveryForm}>
            <h2>Delivery Information</h2>
            <Input
                label="Full Name or Company Name"
                id="name"
                value={enteredName}
                hasError={nameInputHasError || !!fieldErrors.name}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                errorText="Name must be at least 3 characters long."
            />
            <Input
                label="Street and House/Apartment Number"
                id="street"
                value={enteredStreet}
                hasError={streetInputHasError || !!fieldErrors.address}
                onChange={streetChangeHandler}
                onBlur={streetBlurHandler}
                errorText="Please enter a valid address."
            />
            <Input
                label="Postal Code"
                id="postalCode"
                value={enteredPostalCode}
                hasError={postalCodeInputHasError || !!fieldErrors.postalCode}
                onChange={postalCodeChangeHandler}
                onBlur={postalCodeBlurHandler}
                errorText="Please enter a valid postal code."
            />
            <Input
                label="City"
                id="city"
                value={enteredCity}
                hasError={cityInputHasError || !!fieldErrors.city}
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                errorText="Please enter a valid city name."
            />
            <Input
                label="Phone"
                id="phone"
                value={enteredPhone}
                hasError={phoneInputHasError || !!fieldErrors.phone}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                errorText="Please enter a valid phone number."
                type="tel"
            />
            <Input
                label="Email"
                id="email"
                value={enteredEmail}
                hasError={emailInputHasError || !!fieldErrors.email}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                errorText="Please provide a valid email."
                type="email"
            />
        </form>
    )
}

export default DeliveryForm
