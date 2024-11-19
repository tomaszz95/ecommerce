import OnClickButton from '@/components/UI/buttons/OnClickButton'
import ReactDOM from 'react-dom'

import styles from './DeleteOpinionModal.module.css'

type ComponentType = {
    opinionId: string
    onClose: () => void
}

const DeleteOpinionModal = ({ onClose, opinionId }: ComponentType) => {
    const deleteOpinion = () => {
        console.log(opinionId)
        onClose()
    }

    return ReactDOM.createPortal(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h2 className={styles.modalText}>Are you sure you want to delete this review?</h2>
                <div className={styles.modalButtons}>
                    <button onClick={onClose} className={styles.modalBackButton}>
                        Back
                    </button>
                    <OnClickButton onClick={deleteOpinion}>Delete</OnClickButton>
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default DeleteOpinionModal
