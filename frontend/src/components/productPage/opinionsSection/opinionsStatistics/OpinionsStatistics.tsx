import StatisticsView from './StatisticsView'

import { singleOpinionType } from '../../../../types/types'

import styles from './OpinionsStatistics.module.css'

type ComponentType = {
    opinions: singleOpinionType[]
    numOfReviews: number
    averageRating: number
}

const OpinionsStatistics = ({ opinions, numOfReviews, averageRating }: ComponentType) => {
    return (
        <div className={styles.statisticsContainer}>
            <StatisticsView opinions={opinions} numOfReviews={numOfReviews} averageRating={averageRating} />
        </div>
    )
}

export default OpinionsStatistics
