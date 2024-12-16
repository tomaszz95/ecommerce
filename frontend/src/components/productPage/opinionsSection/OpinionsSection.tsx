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
}

const OpinionsSection = ({ productReviews, numOfReviews, averageRating, productId }: ComponentType) => {
    return (
        <section id="opinions" className={styles.opinionsContainer}>
            <h2>Opinions</h2>
            <div className={`${styles.opinionsSection} ${numOfReviews === 0 ? styles.noOpinions : ''}`}>
                <div className={styles.leftColumn}>
                    {numOfReviews !== 0 && (
                        <OpinionsStatistics
                            opinions={productReviews}
                            averageRating={averageRating}
                            numOfReviews={numOfReviews}
                        />
                    )}
                    <OpinionsForm opinionsCount={numOfReviews} formMode="new" productId={productId} />
                </div>
                {numOfReviews !== 0 && <OpinionsList opinions={productReviews} />}
            </div>
        </section>
    )
}

export default OpinionsSection
