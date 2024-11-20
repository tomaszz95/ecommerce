'use client'

import StarRating from '../../../../components/starRating/StarRating'
import ReviewsButtons from './ReviewsButtons'

import { singleOpinionType } from '../../../../types/types'

import styles from './OpinionsListItem.module.css'

type ComponentType = {
    opinion: singleOpinionType
}

const OpinionsListItem = ({ opinion }: ComponentType) => {
    return (
        <div className={styles.opinionItem}>
            <div className={styles.opinionInfo}>
                <h4>{opinion.opinionAuthor}</h4>
                <StarRating rating={opinion.opinionValue} />
            </div>
            <p className={styles.opinionText}>{opinion.opinionText}</p>
            <div className={styles.opinionBottomBox}>
                <ReviewsButtons
                    opinionId={opinion.opinionId}
                    author={opinion.opinionAuthor}
                    message={opinion.opinionText}
                    rating={opinion.opinionValue}
                />
            </div>
        </div>
    )
}

export default OpinionsListItem
