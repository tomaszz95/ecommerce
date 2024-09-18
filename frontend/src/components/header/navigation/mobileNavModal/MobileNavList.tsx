import Image from 'next/image'
import Link from 'next/link'

import mobileNavItems from '../../../../constans/mobileNavItems'

import styles from './MobileNavList.module.css'

const MobileNavList = () => {
    return (
        <ul className={styles.navList}>
            {mobileNavItems.map((item) => (
                <Link href={`/shop/${item.link}`} key={item.link} className={styles.navListLink}>
                    <Image src={item.icon} alt="" />
                    <span>{item.name}</span>
                </Link>
            ))}
        </ul>
    )
}

export default MobileNavList
