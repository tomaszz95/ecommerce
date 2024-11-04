import type { Metadata } from 'next'

import AuthLayout from '../../components/layouts/AuthLayout'

import RegisterView from '../../components/registerPage/RegisterView'

export const metadata: Metadata = {
    title: 'NeXtPC - Register',
    description: 'neXtPC app homepage',
}

const RegisterPage = () => {
    return (
        <AuthLayout>
            <RegisterView />
        </AuthLayout>
    )
}

export default RegisterPage
