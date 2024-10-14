import type { Metadata } from 'next'

import AuthLayout from '../../components/layouts/AuthLayout'

import Login from '../../components/login/Login'

export const metadata: Metadata = {
    title: 'NeXtPC - Login',
    description: 'neXtPC app homepage',
}

const LoginPage = () => {
    return (
        <AuthLayout>
            <Login />
        </AuthLayout>
    )
}

export default LoginPage
