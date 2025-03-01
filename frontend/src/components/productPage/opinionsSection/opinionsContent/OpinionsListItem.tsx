'use client'

import StarRating from '../../../../components/starRating/StarRating'
import ReviewsButtons from './ReviewsButtons'

import { singleOpinionType } from '../../../../types/types'

import styles from './OpinionsListItem.module.css'

type ComponentType = {
    opinion: singleOpinionType
    isLogin: boolean
    userId: string
}

const OpinionsListItem = ({ opinion, isLogin, userId }: ComponentType) => {
    return (
        <div className={styles.opinionItem}>
            <div className={styles.opinionInfo}>
                <h4>{opinion.author}</h4>
                <StarRating rating={opinion.rating} />
            </div>
            <p className={styles.opinionText}>{opinion.message}</p>
            {isLogin && userId === opinion.user && (
                <div className={styles.opinionBottomBox}>
                    <ReviewsButtons
                        opinionId={opinion._id}
                        author={opinion.author}
                        message={opinion.message}
                        rating={opinion.rating}
                    />
                </div>
            )}
        </div>
    )
}

export default OpinionsListItem
