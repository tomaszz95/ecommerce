import { useEffect, useState } from 'react'
import useInput from '../../../hooks/useInput'

import Input from '../../UI/inputs/Input'

import styles from './DeliveryForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const numericRegex = /^\d+$/

type ComponentType = {
    onFormValidationChange: (isValid: boolean, {}) => void
}

const DeliveryForm = ({ onFormValidationChange }: ComponentType) => {
    const [prevFormIsValid, setPrevFormIsValid] = useState(false)

    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueIsValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredStreet,
        hasError: streetInputHasError,
        valueIsValid: streetIsValid,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredPostalCode,
        hasError: postalCodeInputHasError,
        valueIsValid: postalCodeIsValid,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
    } = useInput((value) => numericRegex.test(value.trim()))

    const {
        value: enteredCity,
        hasError: cityInputHasError,
        valueIsValid: cityIsValid,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredPhone,
        hasError: phoneInputHasError,
        valueIsValid: phoneIsValid,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
    } = useInput((value) => numericRegex.test(value.trim()))

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => emailRegex.test(value.trim()))

    const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid && phoneIsValid && emailIsValid

    useEffect(() => {
        if (prevFormIsValid !== formIsValid) {
            setPrevFormIsValid(formIsValid)

            const inputsData = {
                enteredName,
                enteredStreet,
                enteredPostalCode,
                enteredCity,
                enteredPhone,
                enteredEmail,
            }

            onFormValidationChange(formIsValid, inputsData)
        }
    }, [formIsValid, enteredName, enteredStreet, enteredPostalCode, enteredCity, enteredPhone, enteredEmail])

    return (
        <form className={styles.deliveryForm}>
            <h2>Delivery Information</h2>
            <Input
                label="Full Name or Company Name"
                id="name"
                value={enteredName}
                hasError={nameInputHasError}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                errorText="This field must contain only letters."
                type="text"
            />
            <Input
                label="Street and House/Apartment Number"
                id="street"
                value={enteredStreet}
                hasError={streetInputHasError}
                onChange={streetChangeHandler}
                onBlur={streetBlurHandler}
                errorText="This field cannot be empty."
            />
            <Input
                label="Postal Code"
                id="postalCode"
                value={enteredPostalCode}
                hasError={postalCodeInputHasError}
                onChange={postalCodeChangeHandler}
                onBlur={postalCodeBlurHandler}
                errorText="Postal code must be numeric."
                type="number"
            />
            <Input
                label="City"
                id="city"
                value={enteredCity}
                hasError={cityInputHasError}
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                errorText="City must contain only letters and spaces."
            />
            <Input
                label="Phone"
                id="phone"
                value={enteredPhone}
                hasError={phoneInputHasError}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                errorText="Phone number must be numeric."
                type="tel"
            />
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
        </form>
    )
}

export default DeliveryForm
