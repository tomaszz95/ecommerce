import Link from 'next/link'

import ChangeAuthTexts from './ChangeAuthTexts'
import RegisterBenefits from './RegisterBenefits'

import styles from './AuthOverlay.module.css'

type AuthLayoutProps = {
    children: React.ReactNode
    pageType: 'login' | 'register'
}

const AuthOverlay = ({ children, pageType }: AuthLayoutProps) => {
    return (
        <section className={styles.authOverlaySection}>
            <div className={styles.authOverlaySectionContainer}>
                <div className={styles.formContainer}>
                    {children}
                    <Link href="/" aria-label="Go to homepage" className={styles.formLink}>
                        &lt; Go Home
                    </Link>
                </div>
                <div className={styles.offerBox}>
                    <ChangeAuthTexts pageType={pageType} />
                    <RegisterBenefits />
                </div>
            </div>
        </section>
    )
}

export default AuthOverlay
