'use client'

import AuthLayout from '../../components/layouts/AuthLayout'
import LoginView from '../../components/loginPage/LoginView'

import useProtect from '../../hooks/useProtect'
import useMetadata from '../../hooks/useMetadata'

const LoginPage = () => {
    useProtect({ from: 'User' })
    useMetadata({ title: 'Login', description: 'login page' })

    return (
        <AuthLayout>
            <LoginView />
        </AuthLayout>
    )
}

export default LoginPage
