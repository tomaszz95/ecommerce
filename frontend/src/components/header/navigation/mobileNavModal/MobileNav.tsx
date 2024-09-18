import Link from 'next/link'

import MobileNavList from './MobileNavList'

import Contact from '../../../../assets/icons/contact.png'
import styles from './MobileNav.module.css'
import Image from 'next/image'

type ComponentType = {
    onClose: () => void
}

const MobileNav: React.FC<ComponentType> = ({ onClose }) => {
    return (
        <nav className={styles.mobileNav}>
            <div className={styles.mobileNavItem}>
                <span className={styles.mobileNavTitle}>Categories</span>
                <MobileNavList />
            </div>
            <div className={styles.mobileNavItem}>
                <span className={styles.mobileNavTitle}>Any questions?</span>
                <Link href="/contact" className={styles.mobileNavContact} onClick={onClose}>
                    <Image src={Contact} alt="" />
                    <span>Contact us!</span>
                </Link>
            </div>
        </nav>
    )
}

export default MobileNav
