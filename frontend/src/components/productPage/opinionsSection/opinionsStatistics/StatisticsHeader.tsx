import StarRating from '../../../starRating/StarRating'

import styles from './StatisticsHeader.module.css'

type ComponentType = {
    average: number
    totalOpinions: number
}

const StatisticsHeader = ({ average, totalOpinions }: ComponentType) => (
    <div className={styles.statisticsBox}>
        <div>
            <span className={styles.opinionAverage}>{average}</span>
            <span className={styles.opinionMaxScore}>/5</span>
        </div>
        <StarRating rating={average} />
        <span className={styles.opinionsCount}>{totalOpinions === 1 ? '(1 opinion)' : `(${totalOpinions} opinions)`}</span>
    </div>
)

export default StatisticsHeader
