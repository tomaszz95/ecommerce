import { useState } from 'react'
import ReactDOM from 'react-dom'

import OpinionsForm from '../../opinionsForm/OpinionsForm'

import styles from './EditOpinionModal.module.css'

type ComponentType = {
    opinionId: string
    author: string
    rating: number
    message: string
    onClose: () => void
}

const EditOpinionModal = ({ onClose, opinionId, author, rating, message }: ComponentType) => {
    const [buttonDisable, setButtonDisable] = useState(false)

    const disableHandler = (value: boolean) => {
        setButtonDisable(value)
    }

    const onCloseModal = () => {
        if (!buttonDisable) {
            onClose()
        }
    }

    return ReactDOM.createPortal(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <OpinionsForm
                    formMode="edit"
                    author={author}
                    message={message}
                    rating={rating}
                    opinionId={opinionId}
                    onClose={onClose}
                    onDisableHandler={disableHandler}
                />
                <div>
                    <button onClick={onCloseModal} className={styles.modalBackButton} disabled={buttonDisable}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default EditOpinionModal
