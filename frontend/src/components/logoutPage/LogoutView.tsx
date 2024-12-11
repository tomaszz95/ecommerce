'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import HightlightButton from '../UI/buttons/HightlightButton'

import { API_URL } from '../../constans/url'

import styles from './LogoutView.module.css'

const LogoutView = () => {
    const router = useRouter()

    useEffect(() => {
        const orderId = localStorage.getItem('orderId')

        const logoutAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/api/auth/logout`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orderId: orderId,
                    }),
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()

                    throw new Error(errorData.message || 'Logout failed.')
                }
            } catch (err: any) {
                throw new Error(err.message || 'Something went wrong')
            }
        }

        logoutAuth()

        const timer = setTimeout(() => {
            router.push('/')
        }, 30000)

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
                <HightlightButton href="/">Go Now</HightlightButton>
            </div>
        </section>
    )
}

export default LogoutView
