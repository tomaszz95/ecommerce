import StatisticsView from './StatisticsView'

import { productOpinionType } from '../../../../types/types'

import styles from './OpinionsStatistics.module.css'

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
