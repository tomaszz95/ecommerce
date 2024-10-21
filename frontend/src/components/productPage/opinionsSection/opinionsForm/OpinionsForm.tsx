'use client'

import { FormEvent, useState } from 'react'

import Input from '../../../../components/UI/inputs/Input'
import TextArea from '../../../../components/UI/textarea/TextArea'
import useInput from '../../../../hooks/useInput'
import AuthFormButton from '../../../../components/UI/buttons/AuthFormButton'

import styles from './OpinionsForm.module.css'

type ComponentType = {
    productId: string
    opinionsCount: number | undefined
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
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredMessage,
        hasError: messageInputHasError,
        valueIsValid: messageIsValid,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
    } = useInput((value) => value.length >= 20)

    const formIsValid = nameIsValid && messageIsValid && rating > 0

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        if (!formIsValid) {
            console.log('Please fill out all required fields.')
            return
        }

        console.log('Review submitted!', { enteredName, enteredMessage, rating })
    }

    return (
        <form className={styles.addReviewForm} onSubmit={submitHandler}>
            <h3>Add Your First Review</h3>
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
                errorText="The message must be at least 20 characters long."
            />
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
            <AuthFormButton type="submit" formIsValid={formIsValid}>
                Add Review
            </AuthFormButton>
        </form>
    )
}

export default OpinionsForm
