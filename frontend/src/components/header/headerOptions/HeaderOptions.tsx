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
            {isLogin ? (
                <HeaderItem icon={UserIcon} text="Logout" href="/logout" />
            ) : (
                <HeaderItem icon={UserIcon} text="Login" href="/login" />
            )}

            <HeaderItem icon={ContactIcon} text="Contact" href="/contact" />
            <HeaderItem icon={CartIcon} text="Cart" href="/cart" />
        </div>
    )
}

export default HeaderOptions
