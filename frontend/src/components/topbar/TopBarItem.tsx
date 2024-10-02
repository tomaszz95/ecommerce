import Image from 'next/image'

import styles from './TopBarItem.module.css'

type ComponentType = {
    icon: any
    text: string
}

const TopBarItem = ({ icon, text }: ComponentType) => {
    return (
        <div className={styles.topbarItem}>
            <Image src={icon} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default TopBarItem
