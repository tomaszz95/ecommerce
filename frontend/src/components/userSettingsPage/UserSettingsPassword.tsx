import { FormEvent, useState } from 'react'

import useInput from '../../hooks/useInput'

import Input from '../UI/inputs/Input'
import AuthFormButton from '../UI/buttons/AuthFormButton'
import Modal from '../UI/Modal/Modal'

import styles from './UserSettingsPassword.module.css'

type ComponentType = {
    password: string
}

const UserSettingsPassword = ({ password }: ComponentType) => {
    const [serverError, setServerError] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [firstLoading, setFirstLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        valueIsValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput((value) => value.trim() !== '', '')

    const {
        value: enteredNewPassword,
        hasError: newPasswordInputHasError,
        valueIsValid: newPasswordIsValid,
        valueChangeHandler: newPasswordChangeHandler,
        inputBlurHandler: newPasswordBlurHandler,
        reset: resetNewPassword,
    } = useInput((value) => value.length >= 8, '')
    const {
        value: enteredNewRepeatPassword,
        hasError: newPasswordRepeatInputHasError,
        valueIsValid: newPasswordRepeatIsValid,
        valueChangeHandler: newPasswordRepeatChangeHandler,
        inputBlurHandler: newPasswordRepeatBlurHandler,
        reset: resetNewRepeatPassword,
    } = useInput((value) => value === enteredNewPassword && value.length >= 8)

    const formIsValid =
        passwordIsValid &&
        newPasswordIsValid &&
        newPasswordRepeatIsValid &&
        enteredNewPassword === enteredNewRepeatPassword

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
            setIsModalVisible(true)
            setServerError('')

            setTimeout(() => {
                setIsModalVisible(false)
                setIsSubmitting(false)

                resetPassword()
                resetNewPassword()
                resetNewRepeatPassword()
            }, 3000)
        } catch (err) {
            setServerError('Something went wrong. Please try again later.')
            setIsSubmitting(false)
        }
    }

    return (
        <form className={styles.settingsContainer} onSubmit={submitHandler}>
            <h2>Change password</h2>
            <div>
                <h3>Current Password:</h3>
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    value={enteredPassword}
                    hasError={passwordInputHasError}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    errorText="Please enter your current password."
                />
            </div>
            <div>
                <h3>New Password:</h3>
                <Input
                    label="New password"
                    id="newPassword"
                    type="password"
                    value={enteredNewPassword}
                    hasError={newPasswordInputHasError}
                    onChange={newPasswordChangeHandler}
                    onBlur={newPasswordBlurHandler}
                    errorText="New password must be at least 8 characters long."
                />
            </div>
            <div>
                <h3>Repeat Password:</h3>
                <Input
                    label="Repeat new password "
                    id="repeatPassword"
                    type="password"
                    value={enteredNewRepeatPassword}
                    hasError={newPasswordRepeatInputHasError}
                    onChange={newPasswordRepeatChangeHandler}
                    onBlur={newPasswordRepeatBlurHandler}
                    errorText="Passwords must be identical."
                />
            </div>

            {serverError && <p className={styles.serverError}>{serverError}</p>}

            <AuthFormButton type="submit" formIsValid={formIsValid && !isSubmitting}>
                Change password
            </AuthFormButton>

            {!firstLoading && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    Password has been changed
                </Modal>
            )}
        </form>
    )
}

export default UserSettingsPassword
