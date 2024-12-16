import { useState } from 'react'

type ComponentType<T> = {
    validateForm: () => boolean
    resetForm: () => void
    errorMessage: string
    onSubmit?: (formData: T) => Promise<void>
}

export const useSubmitForm = <T,>({ validateForm, resetForm, errorMessage, onSubmit }: ComponentType<T>) => {
    const [serverError, setServerError] = useState<string>('')
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [firstLoading, setFirstLoading] = useState<boolean>(true)

    const submitHandler = async (event: React.FormEvent, formData?: T) => {
        event.preventDefault()

        setIsSubmitting(true)
        setFirstLoading(false)
        setServerError('')

        if (!validateForm()) {
            setServerError(errorMessage)
            setIsSubmitting(false)
            return
        }

        try {
            if (onSubmit) {
                await onSubmit(formData!)
            }
            setIsModalVisible(true)

            setTimeout(() => {
                setIsModalVisible(false)
                setIsSubmitting(false)
                window.location.reload()
                resetForm()
            }, 3000)
        } catch (err: any) {
            setServerError('Something went wrong. Please try again later.')
            setIsSubmitting(false)
            setIsModalVisible(true)
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
