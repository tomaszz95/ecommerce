import Image from 'next/image'
import Link from 'next/link'

import navItems from '../../../constans/navItems'

import styles from './DesktopNavContent.module.css'

const DesktopNavContent = () => {
    return (
        <ul className={styles.navContent}>
            {navItems.map((item) => (
                <Link href={item.link} key={item.link} className={styles.navListLink}>
                    <Image src={item.icon} alt="" />
                    <span>{item.name}</span>
                </Link>
            ))}
        </ul>
    )
}

export default DesktopNavContent
