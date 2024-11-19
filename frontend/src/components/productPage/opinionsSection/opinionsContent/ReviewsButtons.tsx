import { useState } from 'react'
import Image from 'next/image'

import DeleteOpinionModal from './opinionsModals/DeleteOpinionModal'
import EditOpinionModal from './opinionsModals/EditOpinionModal'

import EditIcon from '../../../../assets/icons/edit.svg'
import TrashIcon from '../../../../assets/icons/trash.svg'

import styles from './ReviewsButtons.module.css'

type ComponentType = {
    opinionId: string
    author: string
    rating: number
    message: string
}

const ReviewsButtons = ({ opinionId, author, rating, message }: ComponentType) => {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const openEditModal = () => {
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setShowEditModal(false)
    }

    const openDeleteModal = () => {
        setShowDeleteModal(true)
    }

    const closeDeleteModal = () => {
        setShowDeleteModal(false)
    }

    return (
        <div className={styles.opinionEdit}>
            <button onClick={openEditModal}>
                <Image src={EditIcon} alt="" />
            </button>
            <button onClick={openDeleteModal}>
                <Image src={TrashIcon} alt="" />
            </button>

            {showEditModal && (
                <EditOpinionModal
                    opinionId={opinionId}
                    onClose={closeEditModal}
                    author={author}
                    message={message}
                    rating={rating}
                />
            )}

            {showDeleteModal && <DeleteOpinionModal opinionId={opinionId} onClose={closeDeleteModal} />}
        </div>
    )
}

export default ReviewsButtons
