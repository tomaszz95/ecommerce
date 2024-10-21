import { productOpinionType } from '../../../../types/types'

import styles from './OpinionsStatistics.module.css'
import StatisticsView from './StatisticsView'

type ComponentType = {
    opinions: productOpinionType
}

const OpinionsStatistics = ({ opinions }: ComponentType) => {
    return (
        <div className={styles.statisticsContainer}>
            <StatisticsView opinions={opinions} />
        </div>
    )
}

export default OpinionsStatistics
