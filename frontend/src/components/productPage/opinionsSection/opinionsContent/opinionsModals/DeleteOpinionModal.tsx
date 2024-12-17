import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Modal from '../../../../../components/UI/Modal/Modal'
import OnClickButton from '../../../../../components/UI/buttons/OnClickButton'

import { useSubmitForm } from '../../../../../hooks/useSubmitForm'

import { API_URL } from '../../../../../constans/url'

import styles from './DeleteOpinionModal.module.css'

type ComponentType = {
    opinionId: string
    onClose: () => void
}

const DeleteOpinionModal = ({ onClose, opinionId }: ComponentType) => {
    const [modalText, setModalText] = useState('')

    const deleteOpinionHandler = async () => {
        const response = await fetch(`${API_URL}/api/reviews`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reviewId: opinionId }),
            credentials: 'include',
        })

        const data = await response.json()

        if (!response.ok) {
            setModalText(data.msg)
        } else {
            setModalText('Review has been deleted!')
        }

        setTimeout(() => {
            window.location.reload()
        }, 1250)
    }

    const { serverError, isModalVisible, isSubmitting, submitHandler, setIsModalVisible } = useSubmitForm({
        validateForm: () => true,
        resetForm: () => {},
        errorMessage: 'An error occurred during deletion.',
        onSubmit: deleteOpinionHandler,
    })

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        submitHandler(event)
    }

    return ReactDOM.createPortal(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h2 className={styles.modalText}>Are you sure you want to delete this review?</h2>
                <div className={styles.modalButtons}>
                    <button
                        onClick={onClose}
                        className={`${styles.modalBackButton} ${isSubmitting || isModalVisible ? styles.disabled : ''}`}
                        disabled={isSubmitting || isModalVisible}
                    >
                        Back
                    </button>

                    <OnClickButton onClick={formSubmitHandler} disabled={isSubmitting || isModalVisible}>
                        {isSubmitting || isModalVisible ? 'Deleting...' : 'Delete'}
                    </OnClickButton>
                </div>
            </div>
            {isModalVisible && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    {serverError ? serverError : modalText}
                </Modal>
            )}
        </div>,
        document.body,
    )
}

export default DeleteOpinionModal
