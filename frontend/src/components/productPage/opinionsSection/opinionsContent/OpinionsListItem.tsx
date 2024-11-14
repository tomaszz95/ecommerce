'use client'

import { useState } from 'react'
import Image from 'next/image'

import StarRating from '../../../../components/starRating/StarRating'
import ToastNotification from './ToastNotification'

import LikeIcon from '../../../../assets/icons/like.svg'
import DislikeIcon from '../../../../assets/icons/dislike.svg'

import { singleOpinionType } from '../../../../types/types'

import styles from './OpinionsListItem.module.css'

type ComponentType = {
    opinion: singleOpinionType
}

const OpinionsListItem = ({ opinion }: ComponentType) => {
    const [likesCount, setLikesCount] = useState(opinion.likes)
    const [dislikesCount, setDislikesCount] = useState(opinion.dislikes)
    const [showToast, setShowToast] = useState(false)
    const [toastText, setToastText] = useState('')

    const addLikeHandler = () => {
        setLikesCount((prevValue) => (prevValue = prevValue + 1))
        setToastText('Thank you for your vote')
        setShowToast(true)
    }

    const addDislikeHandler = () => {
        setDislikesCount((prevValue) => (prevValue = prevValue + 1))
        setToastText('Thank you for your vote')
        setShowToast(true)
    }

    const closeToast = () => {
        setShowToast(false)
    }

    return (
        <div className={styles.opinionItem}>
            <div className={styles.opinionInfo}>
                <h4>{opinion.opinionAuthor}</h4>
                <StarRating rating={opinion.opinionValue} />
            </div>
            <p className={styles.opinionText}>{opinion.opinionText}</p>
            <div>
                <p className={styles.opinionTextQuestion}>Was this comment helpful?</p>
                <div className={styles.opinionLikes}>
                    <button className={styles.opinionLikesButton} onClick={addLikeHandler} aria-label="Add like">
                        <Image src={LikeIcon} alt="" />
                        <span>{likesCount}</span>
                    </button>
                    <button className={styles.opinionLikesButton} onClick={addDislikeHandler} aria-label="Add dislike">
                        <Image src={DislikeIcon} alt="" />
                        <span>{dislikesCount}</span>
                    </button>
                </div>
            </div>
            {showToast && <ToastNotification message={toastText} onClose={closeToast} />}
        </div>
    )
}

export default OpinionsListItem
