import { productOpinionType } from '../../../../types/types'
import GiveOpinionBox from './GiveOpinionBox'

import styles from './OpinionsStatistics.module.css'
import StatisticsView from './StatisticsView'

type ComponentType = {
    opinions: productOpinionType
}

const OpinionsStatistics = ({ opinions }: ComponentType) => {
    return (
        <div className={styles.statisticsContainer}>
            <StatisticsView opinions={opinions} />
            <GiveOpinionBox />
        </div>
    )
}

export default OpinionsStatistics
