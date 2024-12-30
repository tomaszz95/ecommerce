'use client'

import useProtect from '../../hooks/useProtect'
import useMetadata from '../../hooks/useMetadata'

import AuthLayout from '../../components/layouts/AuthLayout'
import RegisterView from '../../components/registerPage/RegisterView'

const RegisterPage = () => {
    useProtect({ from: 'User' })
    useMetadata({ title: 'Register', description: 'register page' })

    return (
        <AuthLayout>
            <RegisterView />
        </AuthLayout>
    )
}

export default RegisterPage
