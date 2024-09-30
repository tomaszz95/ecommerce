import Image from 'next/image'
import Link from 'next/link'

import mobileNavItems from '../../../../constans/mobileNavItems'
import styles from './DesktopNavContent.module.css'

const DesktopNavContent = () => {
    return (
        <ul className={styles.navContent}>
            {mobileNavItems.map((item) => (
                <Link href={`/shop/${item.link}`} key={item.link} className={styles.navListLink}>
                    <Image src={item.icon} alt="" />
                    <span>{item.name}</span>
                </Link>
            ))}
        </ul>
    )
}

export default DesktopNavContent
