import OpinionsListItem from './OpinionsListItem'

import { singleOpinionType } from '../../../../types/types'

import styles from './OpinionsList.module.css'

type ComponentType = {
    opinions: singleOpinionType[]
}

const OpinionsList = ({ opinions }: ComponentType) => {
    return (
        <ul className={styles.opinionsListBox}>
            {opinions.map((opinion) => (
                <OpinionsListItem opinion={opinion} key={opinion._id} />
            ))}
        </ul>
    )
}

export default OpinionsList
