'use client'

import OpinionsStatistics from './opinionsStatistics/OpinionsStatistics'
import OpinionsList from './opinionsContent/OpinionsList'
import OpinionsForm from './opinionsForm/OpinionsForm'

import { singleOpinionType } from '../../../types/types'

import styles from './OpinionsSection.module.css'

type ComponentType = {
    productReviews: singleOpinionType[]
    numOfReviews: number
    averageRating: number
    productId: string
    tokenData: {
        name: string
        userId: string
    }
}

const OpinionsSection = ({ productReviews, numOfReviews, averageRating, productId, tokenData }: ComponentType) => {
    const userAlreadyReviewed = productReviews.some((opinion) => opinion.user === tokenData.userId)

    return (
        <section id="opinions" className={styles.opinionsContainer}>
            <h2>Reviews</h2>

            <div className={`${styles.opinionsSection} ${numOfReviews === 0 ? styles.noOpinions : ''}`}>
                <div className={styles.leftColumn}>
                    {numOfReviews !== 0 && (
                        <OpinionsStatistics
                            opinions={productReviews}
                            averageRating={averageRating}
                            numOfReviews={numOfReviews}
                        />
                    )}

                    {tokenData.name !== '' &&
                        (userAlreadyReviewed ? (
                            <h3 className={styles.submitted}>You have already submitted a review for this product.</h3>
                        ) : (
                            <OpinionsForm
                                opinionsCount={numOfReviews}
                                formMode="new"
                                productId={productId}
                                userName={tokenData.name}
                            />
                        ))}
                </div>
                {numOfReviews !== 0 && (
                    <OpinionsList opinions={productReviews} isLogin={tokenData.name !== ''} userId={tokenData.userId} />
                )}
            </div>

            {tokenData.name === '' && <h3>To add your review you must be logged in.</h3>}
        </section>
    )
}

export default OpinionsSection
