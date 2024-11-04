import type { Metadata } from 'next'

import AuthLayout from '../../components/layouts/AuthLayout'

import LogoutView from '../../components/logoutPage/LogoutView'

export const metadata: Metadata = {
    title: 'NeXtPC - Logout',
    description: 'neXtPC app homepage',
}

const LogoutPage = () => {
    return (
        <AuthLayout>
            <LogoutView />
        </AuthLayout>
    )
}

export default LogoutPage
