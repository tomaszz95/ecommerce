import type { Metadata } from 'next'

import AuthLayout from '../../components/layouts/AuthLayout'

import LoginOrRegister from '../../components/loginOrRegisterPage/LoginOrRegister'

export const metadata: Metadata = {
    title: 'NeXtPC - Login or Register',
    description: 'neXtPC app homepage',
}

const LoginOrRegisterPage = () => {
    return (
        <AuthLayout>
            <LoginOrRegister />
        </AuthLayout>
    )
}

export default LoginOrRegisterPage
