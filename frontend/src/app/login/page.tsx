'use client'

import { useEffect } from 'react'

import AuthLayout from '../../components/layouts/AuthLayout'
import LoginView from '../../components/loginPage/LoginView'

const LoginPage = () => {
    useEffect(() => {
        document.title = `NeXtPC - Login`
        const metaDescription = document.querySelector('meta[name="description"]')

        if (metaDescription) {
            metaDescription.setAttribute('content', `neXtPC app login page`)
        }
    }, [])

    return (
        <AuthLayout>
            <LoginView />
        </AuthLayout>
    )
}

export default LoginPage
