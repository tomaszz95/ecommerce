import Link from 'next/link'

import FooterPhoneContact from './FooterContact'
import FooterSocials from './FooterSocials'

import styles from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <h3 className={styles.title}>DO YOU HAVE QUESTIONS?</h3>
            <Link href="/contact" className={styles.contactLink}>
                Call us or write
            </Link>
            <div className={styles.container}>
                <FooterPhoneContact />
                <FooterSocials />
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 1998-{currentYear} by neXtPC.</p>
                <p>All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
