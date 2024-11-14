'use client'

import { useEffect } from 'react'

import AuthOverlay from '../auth/AuthOverlay'
import LoginForm from '../loginPage/LoginForm'

const LoginOrRegister = () => {
    useEffect(() => {
        const expirationKey = 'loginOrRegisterExpiration'

        const setLocalStorageWithExpiration = () => {
            const now = new Date()
            const expirationTime = now.getTime() + 60 * 60 * 1000

            localStorage.setItem(expirationKey, expirationTime.toString())
        }

        setLocalStorageWithExpiration()
    }, [])

    return (
        <AuthOverlay pageType="login" loginOrRegister={true}>
            <LoginForm />
        </AuthOverlay>
    )
}

export default LoginOrRegister
