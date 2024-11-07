'use client'

import { useEffect, useState } from 'react'

import HeaderItem from './HeaderItem'

import UserIcon from '../../../assets/icons/user.svg'
import ContactIcon from '../../../assets/icons/contact.svg'
import CartIcon from '../../../assets/icons/cart.svg'

import styles from './HeaderOptions.module.css'

const HeaderOptions = () => {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin')

        if (isLogin === 'true') {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
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
