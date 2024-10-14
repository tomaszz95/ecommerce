import Image from 'next/image'
import Link from 'next/link'

import navItems from '../../../constans/navItems'

import styles from './MobileNavList.module.css'

type ComponentType = {
    onClose: () => void
}

const MobileNavList: React.FC<ComponentType> = ({ onClose }) => {
    return (
        <ul className={styles.navList}>
            {navItems.map((item) => (
                <Link href={item.link} key={item.link} className={styles.navListLink} onClick={onClose}>
                    <Image src={item.icon} alt="" />
                    <span>{item.name}</span>
                </Link>
            ))}
        </ul>
    )
}

export default MobileNavList
