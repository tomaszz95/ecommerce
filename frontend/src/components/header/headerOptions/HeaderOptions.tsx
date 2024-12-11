'use client'

import { useEffect, useState } from 'react'

import HeaderItem from './HeaderItem'

import UserIcon from '../../../assets/icons/user.svg'
import ContactIcon from '../../../assets/icons/contact.svg'
import CartIcon from '../../../assets/icons/cart.svg'

import { API_URL } from '../../../constans/url'

import styles from './HeaderOptions.module.css'

const HeaderOptions = () => {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/api/auth/isLogged`, {
                    method: 'GET',
                    credentials: 'include',
                })

                const data = await response.json()

                if (data.message === 'User') {
                    setIsLogin(true)
                } else {
                    setIsLogin(false)
                }
            } catch (error) {
                setIsLogin(false)
            }
        }

        checkAuth()
    }, [])

    return (
        <div className={styles.headerOptions}>
            <HeaderItem icon={ContactIcon} text="Contact" href="/contact" />
            <HeaderItem icon={CartIcon} text="Cart" href="/cart" />
            {isLogin ? (
                <HeaderItem icon={UserIcon} text="User" href="/user" />
            ) : (
                <HeaderItem icon={UserIcon} text="Login" href="/login" />
            )}
        </div>
    )
}

export default HeaderOptions
