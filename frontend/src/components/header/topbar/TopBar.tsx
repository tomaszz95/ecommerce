import Image from 'next/image'

import BriefcaseIcon from '../../../assets/icons/briefcase.svg'
import StarIcon from '../../../assets/icons/star.svg'
import PackageIcon from '../../../assets/icons/package.svg'
import ShopIcon from '../../../assets/icons/shop.svg'

import styles from './TopBar.module.css'

const TopBar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div className={styles.topbarItem}>
                    <Image src={BriefcaseIcon} alt="" />
                    <p>10 years in business</p>
                </div>
                <div className={styles.topbarItem}>
                    <Image src={StarIcon} alt="" />
                    <p>Highest customer ratings</p>
                </div>
                <div className={styles.topbarItem}>
                    <Image src={PackageIcon} alt="" />
                    <p>Express order shipping</p>
                </div>
                <div className={styles.topbarItem}>
                    <Image src={ShopIcon} alt="" />
                    <p>Free delivery to 20 stores</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar
