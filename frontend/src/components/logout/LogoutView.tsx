'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './LogoutView.module.css'

const LogoutView = () => {
    const router = useRouter()
    
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 30000)

        localStorage.removeItem('isLogin')

        return () => clearTimeout(timer)
    })

    return (
        <section className={styles.logoutSection}>
            <div className={styles.logoutCard}>
                <h1>Leaving So Soon?</h1>
                <p>
                    Just so you know, you don’t always need to sign out of NeXtPC. It’s only necessary if you’re on a
                    shared or public computer.
                </p>
                <p>You’ll be redirected to nextpc.com in 30 seconds.</p>
                <Link href="/" className={styles.goBackButton} onClick={() => router.push('/')}>
                    Go Now
                </Link>
            </div>
        </section>
    )
}

export default LogoutView
