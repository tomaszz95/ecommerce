import TopBarItem from './TopBarItem'

import BriefcaseIcon from '../../assets/icons/briefcase.svg'
import StarIcon from '../../assets/icons/star.svg'
import PackageIcon from '../../assets/icons/package.svg'
import ShopIcon from '../../assets/icons/shop.svg'

import styles from './TopBarContainer.module.css'

const TopBarContainer = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbarContainer}>
                <TopBarItem icon={BriefcaseIcon}>10 years in business</TopBarItem>
                <TopBarItem icon={StarIcon}>Highest customer ratings</TopBarItem>
                <TopBarItem icon={PackageIcon}>Express order shipping</TopBarItem>
                <TopBarItem icon={ShopIcon}>Free delivery to 20 stores</TopBarItem>
            </div>
        </div>
    )
}

export default TopBarContainer
