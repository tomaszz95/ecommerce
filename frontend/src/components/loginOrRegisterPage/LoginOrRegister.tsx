import { useState } from 'react'
import Link from 'next/link'

import LoginForm from '../loginPage/LoginForm'
import BuyAsGuest from './BuyAsGuest'
import RegisterBenefits from '../auth/RegisterBenefits'

import styles from './LoginOrRegister.module.css'
import RegisterForm from '../registerPage/RegisterForm'

type ComponentType = {
    orderId: string
}

const LoginOrRegister = ({ orderId }: ComponentType) => {
    const [pageType, setPageType] = useState('login')

    const authOptionHandler = () => {
        if (pageType === 'login') {
            setPageType('register')
        } else {
            setPageType('login')
        }
    }

    return (
        <section className={styles.authOverlaySection}>
            <div className={styles.authOverlaySectionContainer}>
                <div className={styles.formContainer}>
                    <Link href="/" aria-label="Go to homepage" className={styles.formLink}>
                        &lt; Go Home
                    </Link>
                    {pageType === 'login' ? <LoginForm orderId={orderId} /> : <RegisterForm orderId={orderId} />}
                    <BuyAsGuest orderId={orderId} />
                </div>
                <div className={styles.offerBox}>
                    <div className={styles.changeAuthBox}>
                        <h2>{pageType === 'login' ? "Don't have an account?" : 'Already have an account?'}</h2>
                        <button onClick={authOptionHandler} aria-label={`Change page type`}>
                            {pageType === 'login' ? 'Create' : 'Login'}
                        </button>
                    </div>
                    <RegisterBenefits />
                </div>
            </div>
        </section>
    )
}

export default LoginOrRegister
