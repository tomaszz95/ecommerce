import ProgressBarRow from './ProgressBarRow'
import StatisticsHeader from './StatisticsHeader'

import { calculateOpinionCounts, calculateBarWidth } from '../../../../helpers/statisticsHelper'

import { productOpinionType } from '../../../../types/types'

import styles from './StatisticsView.module.css'

type ComponentType = {
    opinions: productOpinionType
}

const StatisticsView = ({ opinions }: ComponentType) => {
    const opinionCounts = calculateOpinionCounts(opinions.opinions)

    return (
        <div className={styles.statisticsContainer}>
            <StatisticsHeader average={opinions.opinionsAverage} totalOpinions={opinions.opinionsCount} />

            <div className={styles.progressBarsBox}>
                {([5, 4, 3, 2, 1] as const).map((value) => (
                    <ProgressBarRow
                        key={value}
                        value={value}
                        count={opinionCounts[value]}
                        barWidth={calculateBarWidth(value, opinionCounts, opinions.opinionsCount)}
                    />
                ))}
            </div>
        </div>
    )
}

export default StatisticsView
