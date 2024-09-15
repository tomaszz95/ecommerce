import Image from 'next/image'

import Briefcase from '../../../assets/icons/briefcase.png'
import Star from '../../../assets/icons/star.png'
import Package from '../../../assets/icons/package.png'
import Shop from '../../../assets/icons/shop.png'

import styles from './TopBar.module.css'

const TopBar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div className={styles.topbarItem}>
                    <Image src={Briefcase} alt="" />
                    <p>10 years in business</p>
                </div>
                <div className={styles.topbarItem}>
                    <Image src={Star} alt="" />
                    <p>Highest customer ratings</p>
                </div>
                <div className={styles.topbarItem}>
                    <Image src={Package} alt="" />
                    <p>Express order shipping</p>
                </div>
                <div className={styles.topbarItem}>
                    <Image src={Shop} alt="" />
                    <p>Free delivery to 20 stores</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar
