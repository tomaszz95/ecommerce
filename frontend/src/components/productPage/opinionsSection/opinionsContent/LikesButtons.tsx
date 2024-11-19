import { useState } from 'react'
import Image from 'next/image'

import ToastNotification from './opinionsModals/ToastNotification'

import LikeIcon from '../../../../assets/icons/like.svg'
import DislikeIcon from '../../../../assets/icons/dislike.svg'

import styles from './LikesButtons.module.css'

type ComponentType = {
    likes: number
    dislikes: number
}

const LikesButtons = ({ likes, dislikes }: ComponentType) => {
    const [likesCount, setLikesCount] = useState(likes)
    const [dislikesCount, setDislikesCount] = useState(dislikes)
    const [showToast, setShowToast] = useState(false)
    const [toastText, setToastText] = useState('')

    const closeToast = () => {
        setShowToast(false)
    }

    const addLikeHandler = () => {
        setLikesCount((prevValue) => (prevValue = prevValue + 1))
        setToastText('Thank you for your like')
        setShowToast(true)
    }

    const addDislikeHandler = () => {
        setDislikesCount((prevValue) => (prevValue = prevValue + 1))
        setToastText('Thank you for your dislike')
        setShowToast(true)
    }

    return (
        <div className={styles.opinionLikes}>
            <button className={styles.opinionLikesButton} onClick={addLikeHandler} aria-label="Add like">
                <Image src={LikeIcon} alt="" />
                <span>{likesCount}</span>
            </button>
            <button className={styles.opinionLikesButton} onClick={addDislikeHandler} aria-label="Add dislike">
                <Image src={DislikeIcon} alt="" />
                <span>{dislikesCount}</span>
            </button>

            {showToast && <ToastNotification message={toastText} onClose={closeToast} />}
        </div>
    )
}

export default LikesButtons
