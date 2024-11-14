import Link from 'next/link'

import FooterNav from './mainFooter/FooterNav'
import FooterPhoneContact from './mainFooter/FooterContact'
import FooterSocials from './mainFooter/FooterSocials'

import styles from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <h3 className={styles.title}>DO YOU HAVE QUESTIONS?</h3>
            <Link href="/contact" className={styles.contactLink} aria-label="Go to contact page">
                Call us or write
            </Link>
            <div className={styles.container}>
                <FooterNav />
                <FooterPhoneContact />
                <FooterSocials />
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 1998-{currentYear} by neXtPC.</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
