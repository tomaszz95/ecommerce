import Link from 'next/link'

import navItems from '../../../constans/navItems'

import styles from './FooterNav.module.css'

const FooterNav = () => {
    return (
        <div className={styles.container}>
            <p>Menu</p>
            <div className={styles.linkBox}>
                {navItems.map((item) => (
                    <Link href={item.link} key={item.link}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FooterNav
