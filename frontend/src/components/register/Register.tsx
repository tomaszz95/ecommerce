import Link from 'next/link'

import ChangeAuth from '../auth/ChangeAuth'
import BenefitsAuth from '../auth/BenefitsAuth'
import RegisterForm from './RegisterForm'

import styles from './Register.module.css'

const Register = () => {
    return (
        <section className={styles.loginSection}>
            <div className={styles.loginSectionContainer}>
                <div className={styles.loginFormContainer}>
                    <RegisterForm />
                    <Link href="/"> &lt; Go Back</Link>
                </div>
                <div className={styles.loginOfferBox}>
                    <ChangeAuth pageType="register" />
                    <BenefitsAuth />
                </div>
            </div>
        </section>
    )
}

export default Register
