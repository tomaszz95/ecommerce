import Link from 'next/link'

import styles from './ChangeAuth.module.css'

type ComponentType = { pageType: string }

const ChangeAuth = ({ pageType }: ComponentType) => {
    const isLoginPage = pageType === 'login'

    return (
        <div className={styles.changeAuthBox}>
            <h2>{isLoginPage ? "Don't have an account?" : 'Already have an account?'}</h2>
            <Link href={isLoginPage ? '/register' : '/login'}>{isLoginPage ? 'Create' : 'Login'}</Link>
        </div>
    )
}

export default ChangeAuth