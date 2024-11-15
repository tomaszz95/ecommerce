'use client'

import { useState } from 'react'

type ComponentType = {
    validateForm: () => boolean
    resetForm: () => void
    errorMessage: string
}

export const useSubmitForm = ({ validateForm, resetForm, errorMessage }: ComponentType) => {
    const [serverError, setServerError] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [firstLoading, setFirstLoading] = useState(true)

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        setIsSubmitting(true)
        setFirstLoading(false)

        if (!validateForm()) {
            setServerError(errorMessage)
            setIsSubmitting(false)
            return
        }

        try {
            setIsModalVisible(true)

            setTimeout(() => {
                setIsModalVisible(false)
                setIsSubmitting(false)
                resetForm()
            }, 3000)
        } catch (err) {
            setServerError('Something went wrong. Please try again later.')
            setIsSubmitting(false)
        }
    }

    return {
        serverError,
        isModalVisible,
        isSubmitting,
        firstLoading,
        submitHandler,
        setIsModalVisible,
    }
}
