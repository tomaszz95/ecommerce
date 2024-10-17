import TopBarItem from './TopBarItem'

import topBarItems from '../../constans/topBarItems'

import styles from './TopBarContainer.module.css'

const TopBarContainer = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbarContainer}>
                {topBarItems.map((item) => (
                    <TopBarItem icon={item.icon} text={item.text} key={item.text} />
                ))}
            </div>
        </div>
    )
}

export default TopBarContainer
