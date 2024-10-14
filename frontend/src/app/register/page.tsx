import type { Metadata } from 'next'

import AuthLayout from '../../components/layouts/AuthLayout'

import Register from '../../components/register/Register'

export const metadata: Metadata = {
    title: 'NeXtPC - Register',
    description: 'neXtPC app homepage',
}

const RegisterPage = () => {
    return (
        <AuthLayout>
            <Register />
        </AuthLayout>
    )
}

export default RegisterPage
