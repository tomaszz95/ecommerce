import type { Metadata } from 'next'

import AuthLayout from '../../components/layouts/AuthLayout'

import LoginView from '../../components/loginPage/LoginView'

export const metadata: Metadata = {
    title: 'NeXtPC - Login',
    description: 'neXtPC app homepage',
}

const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginView />
        </AuthLayout>
    )
}

export default LoginPage
