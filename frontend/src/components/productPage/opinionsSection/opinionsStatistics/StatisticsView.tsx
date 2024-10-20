import { productOpinionType } from '../../../../types/types'
import StarRating from '../../../starRating/StarRating'

import styles from './StatisticsView.module.css'

type ComponentType = {
    opinions: productOpinionType
}

const StatisticsView = ({ opinions }: ComponentType) => {
    const opinionCounts: {
        1: number
        2: number
        3: number
        4: number
        5: number
    } = opinions.opinions.reduce(
        (acc, curr) => {
            acc[curr.opinionValue as 1 | 2 | 3 | 4 | 5] = (acc[curr.opinionValue as 1 | 2 | 3 | 4 | 5] || 0) + 1
            return acc
        },
        { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    )

    const getBarWidth = (value: 1 | 2 | 3 | 4 | 5) => {
        return (opinionCounts[value] / opinions.opinionsCount) * 100
    }

    return (
        <>
            <div className={styles.statisticsBox}>
                <div>
                    <span className={styles.opinionAverage}>{opinions.opinionsAverage}</span>
                    <span className={styles.opinionMaxScore}>/5</span>
                </div>
                <StarRating rating={opinions.opinionsAverage} />
                <span>{opinions.opinionsCount === 1 ? '(1 opinion)' : `(${opinions.opinionsCount} opinions)`}</span>
            </div>

            <div className={styles.progressBars}>
                {([5, 4, 3, 2, 1] as const).map((value) => (
                    <div key={value} className={styles.progressRow}>
                        <div className={styles.starText}>★ {value}</div>
                        <div className={styles.progressBar}>
                            <div className={styles.filledBar} style={{ width: `${getBarWidth(value)}%` }} />
                        </div>
                        <span>{opinionCounts[value]}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StatisticsView
