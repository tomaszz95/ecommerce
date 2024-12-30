'use client'

import useProtect from '../../hooks/useProtect'
import useMetadata from '../../hooks/useMetadata'

import AuthLayout from '../../components/layouts/AuthLayout'
import LogoutView from '../../components/logoutPage/LogoutView'

const LogoutPage = () => {
    useProtect({ from: 'Guest' })
    useMetadata({ title: 'Logout', description: 'logout page' })

    return (
        <AuthLayout>
            <LogoutView />
        </AuthLayout>
    )
}

export default LogoutPage
