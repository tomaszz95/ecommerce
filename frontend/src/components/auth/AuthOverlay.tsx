import Link from 'next/link'

import ChangeAuthTexts from './ChangeAuthTexts'
import RegisterBenefits from './RegisterBenefits'

import styles from './AuthOverlay.module.css'
import BuyAsGuest from '../loginOrRegister/BuyAsGuest'

type AuthLayoutProps = {
    children: React.ReactNode
    pageType: 'login' | 'register'
    loginOrRegister?: boolean
}

const AuthOverlay = ({ children, pageType, loginOrRegister }: AuthLayoutProps) => {
    return (
        <section className={styles.authOverlaySection}>
            <div className={styles.authOverlaySectionContainer}>
                <div className={styles.formContainer}>
                    {children}
                    <Link href="/"> &lt; Go Home</Link>
                    {loginOrRegister && <BuyAsGuest />}
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
