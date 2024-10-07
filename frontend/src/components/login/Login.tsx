import Link from 'next/link'

import LoginForm from './LoginForm'
import ChangeAuth from '../auth/ChangeAuth'
import BenefitsAuth from '../auth/BenefitsAuth'

import styles from './Login.module.css'

const Login = () => {
    return (
        <section className={styles.loginSection}>
            <div className={styles.loginSectionContainer}>
                <div className={styles.loginFormContainer}>
                    <LoginForm />
                    <Link href="/"> &lt; Go Back</Link>
                </div>
                <div className={styles.loginOfferBox}>
                    <ChangeAuth pageType="login" />
                    <BenefitsAuth />
                </div>
            </div>
        </section>
    )
}

export default Login
