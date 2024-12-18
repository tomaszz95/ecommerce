import OpinionsListItem from './OpinionsListItem'

import { singleOpinionType } from '../../../../types/types'

import styles from './OpinionsList.module.css'

type ComponentType = {
    opinions: singleOpinionType[]
    isLogin: boolean
}

const OpinionsList = ({ opinions, isLogin }: ComponentType) => {
    return (
        <ul className={styles.opinionsListBox}>
            {opinions.map((opinion) => (
                <OpinionsListItem opinion={opinion} key={opinion._id} isLogin={isLogin} />
            ))}
        </ul>
    )
}

export default OpinionsList
