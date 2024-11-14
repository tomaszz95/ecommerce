import Image, { StaticImageData } from 'next/image'

import styles from './TopBarItem.module.css'

type ComponentType = { children: React.ReactNode; icon: StaticImageData }

const TopBarItem = ({ icon, children }: ComponentType) => {
    return (
        <div className={styles.topbarItem}>
            <Image src={icon} alt="" />
            <p>{children}</p>
        </div>
    )
}

export default TopBarItem
