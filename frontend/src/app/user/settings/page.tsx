import type { Metadata } from 'next'

import MainLayout from '../../../components/layouts/MainLayout'
import UserSettingsView from '../../../components/userSettingsPage/UserSettingsView'

import userDummy from '../../../constans/userDummy'

export const metadata: Metadata = {
    title: 'NeXtPC - User settings',
    description: 'neXtPC app homepage',
}

const UserSettingsPage = () => {
    return (
        <MainLayout>
            <UserSettingsView userData={userDummy} />
        </MainLayout>
    )
}

export default UserSettingsPage
