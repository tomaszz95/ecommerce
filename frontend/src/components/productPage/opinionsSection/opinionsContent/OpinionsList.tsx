import OpinionsListItem from './OpinionsListItem'

import { singleOpinionType } from '../../../../types/types'

import styles from './OpinionsList.module.css'

type ComponentType = {
    opinions: singleOpinionType[]
    isLogin: boolean
    userId: string
}

const OpinionsList = ({ opinions, isLogin, userId }: ComponentType) => {
    return (
        <ul className={styles.opinionsListBox}>
            {opinions.map((opinion) => (
                <OpinionsListItem opinion={opinion} key={opinion._id} isLogin={isLogin} userId={userId} />
            ))}
        </ul>
    )
}

export default OpinionsList
