'use client'

import { useState } from 'react'

import Input from '../../../../components/UI/inputs/Input'
import TextArea from '../../../../components/UI/textarea/TextArea'
import useInput from '../../../../hooks/useInput'
import AuthFormButton from '../../../../components/UI/buttons/AuthFormButton'
import Modal from '../../../../components/UI/Modal/Modal'
import { useSubmitForm } from '../../../../hooks/useSubmitForm'

import styles from './OpinionsForm.module.css'

type ComponentType = {
    productId: string
    opinionsCount: number
}

const OpinionsForm = ({ productId, opinionsCount }: ComponentType) => {
    const [rating, setRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)

    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueIsValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredMessage,
        hasError: messageInputHasError,
        valueIsValid: messageIsValid,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessage,
    } = useInput((value) => value.trim() !== '')

    const formIsValid = nameIsValid && messageIsValid && rating > 0

    const validateForm = () => nameIsValid && messageIsValid && rating > 0

    const resetForm = () => {
        resetName()
        resetMessage()
        setRating(0)
    }

    const { serverError, isModalVisible, isSubmitting, firstLoading, submitHandler, setIsModalVisible } = useSubmitForm(
        {
            validateForm,
            resetForm,
            errorMessage: 'Please fill out all required fields correctly.',
        },
    )

    return (
        <form
            className={`${styles.addReviewForm} ${opinionsCount === 0 ? styles.noOpinions : ''}`}
            onSubmit={submitHandler}
        >
            {opinionsCount === 0 ? <h3>Add Your First Review</h3> : <h3>Add Review</h3>}
            <p>Have this product? Share your opinion based on the criteria below.</p>
            <Input
                label="Your Name"
                id="name"
                value={enteredName}
                hasError={nameInputHasError}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                errorText="Name is required."
            />
            <TextArea
                label="Your Message"
                id="message"
                value={enteredMessage}
                hasError={messageInputHasError}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                errorText="The message is required."
            />
            <div className={styles.starsBox}>
                <p>Your rating:</p>
                <div className={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`${styles.star} ${(hoveredRating || rating) >= star ? styles.filled : ''}`}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => {
                                setRating(star)
                                setHoveredRating(0)
                            }}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>

            {serverError && <p className={styles.serverError}>{serverError}</p>}

            <AuthFormButton type="submit" formIsValid={formIsValid && !isSubmitting}>
                Add Review
            </AuthFormButton>

            {!firstLoading && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    Your review has been submitted!
                </Modal>
            )}
        </form>
    )
}

export default OpinionsForm
