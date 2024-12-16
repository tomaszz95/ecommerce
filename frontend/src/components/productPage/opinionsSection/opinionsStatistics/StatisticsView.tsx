import ProgressBarRow from './ProgressBarRow'
import StatisticsHeader from './StatisticsHeader'

import { calculateOpinionCounts, calculateBarWidth } from '../../../../helpers/statisticsHelper'

import { singleOpinionType } from '../../../../types/types'

import styles from './StatisticsView.module.css'

type ComponentType = {
    opinions: singleOpinionType[]
    numOfReviews: number
    averageRating: number
}

const StatisticsView = ({ opinions, numOfReviews, averageRating }: ComponentType) => {
    const opinionCounts = calculateOpinionCounts(opinions)

    return (
        <div className={styles.statisticsContainer}>
            <StatisticsHeader average={averageRating} totalOpinions={numOfReviews} />

            <div className={styles.progressBarsBox}>
                {([5, 4, 3, 2, 1] as const).map((value) => (
                    <ProgressBarRow
                        key={value}
                        value={value}
                        count={opinionCounts[value]}
                        barWidth={calculateBarWidth(value, opinionCounts, numOfReviews)}
                    />
                ))}
            </div>
        </div>
    )
}

export default StatisticsView
