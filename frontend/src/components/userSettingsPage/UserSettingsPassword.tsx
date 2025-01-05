import useInput from '../../hooks/useInput'
import { useSubmitForm } from '../../hooks/useSubmitForm'

import Input from '../UI/inputs/Input'
import AuthFormButton from '../UI/buttons/AuthFormButton'
import Modal from '../UI/modal/Modal'

import { API_URL } from '../../constans/url'

import styles from './UserSettingsPassword.module.css'

const UserSettingsPassword = () => {
    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        valueIsValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(
        (value) => value.trim() !== '' && !/\s/.test(value),
        '',
        (value) => value.replace(/\s/g, ''),
    )

    const {
        value: enteredNewPassword,
        hasError: newPasswordInputHasError,
        valueIsValid: newPasswordIsValid,
        valueChangeHandler: newPasswordChangeHandler,
        inputBlurHandler: newPasswordBlurHandler,
        reset: resetNewPassword,
    } = useInput(
        (value) => value.length >= 8 && !/\s/.test(value),
        '',
        (value) => value.replace(/\s/g, ''),
    )

    const {
        value: enteredNewRepeatPassword,
        hasError: newPasswordRepeatInputHasError,
        valueIsValid: newPasswordRepeatIsValid,
        valueChangeHandler: newPasswordRepeatChangeHandler,
        inputBlurHandler: newPasswordRepeatBlurHandler,
        reset: resetNewRepeatPassword,
    } = useInput(
        (value) => value === enteredNewPassword && value.length >= 8 && !/\s/.test(value),
        '',
        (value) => value.replace(/\s/g, ''),
    )

    const formIsValid =
        passwordIsValid &&
        newPasswordIsValid &&
        newPasswordRepeatIsValid &&
        enteredNewPassword === enteredNewRepeatPassword

    const validateForm = () => formIsValid

    const resetForm = () => {
        resetPassword()
        resetNewPassword()
        resetNewRepeatPassword()
    }

    const updatePasswordHandler = async (formData: { oldPassword: string; newPassword: string }) => {
        const response = await fetch(`${API_URL}/api/users/updateUserPassword`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                oldPassword: formData.oldPassword,
                newPassword: formData.newPassword,
            }),
            credentials: 'include',
        })

        if (!response.ok) {
            const errorData = await response.json()

            throw new Error(errorData.msg || 'Something went wrong. Please try again later.')
        }
    }

    const { serverError, isModalVisible, isSubmitting, firstLoading, submitHandler, setIsModalVisible } = useSubmitForm(
        {
            validateForm,
            resetForm,
            errorMessage: 'Please fill out all required fields correctly.',
            onSubmit: updatePasswordHandler,
        },
    )

    const formSubmitHandler = (event: React.FormEvent) => {
        submitHandler(event, {
            oldPassword: enteredPassword,
            newPassword: enteredNewPassword,
        })
    }

    return (
        <form className={styles.settingsContainer} onSubmit={formSubmitHandler}>
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

            <AuthFormButton type="submit" formIsValid={formIsValid && !isSubmitting && !isModalVisible}>
                Change password
            </AuthFormButton>

            {!firstLoading && !isSubmitting && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    {serverError ? serverError : 'Password has been changed'}
                </Modal>
            )}
        </form>
    )
}

export default UserSettingsPassword
