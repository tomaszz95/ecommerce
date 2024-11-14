import Image from 'next/image'
import Link from 'next/link'

import MobileNavList from './MobileNavList'

import ContactIcon from '../../../assets/icons/contact.svg'

import styles from './MobileNavContent.module.css'

type ComponentType = {
    onClose: () => void
}

const MobileNav: React.FC<ComponentType> = ({ onClose }) => {
    return (
        <nav className={styles.mobileNav}>
            <div className={styles.mobileNavItem}>
                <span className={styles.mobileNavTitle}>Categories</span>
                <MobileNavList onClose={onClose} />
            </div>
            <div className={styles.mobileNavItem}>
                <span className={styles.mobileNavTitle}>Any questions?</span>
                <Link
                    href="/contact"
                    className={styles.mobileNavContact}
                    onClick={onClose}
                    aria-label="Go to contact page"
                >
                    <Image src={ContactIcon} alt="" />
                    <span>Contact us!</span>
                </Link>
            </div>
        </nav>
    )
}

export default MobileNav
