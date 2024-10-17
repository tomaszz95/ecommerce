import Image from 'next/image'

import { topBarItemType } from '../../types/types'

import styles from './TopBarItem.module.css'

const TopBarItem = ({ icon, text }: topBarItemType) => {
    return (
        <div className={styles.topbarItem}>
            <Image src={icon} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default TopBarItem
