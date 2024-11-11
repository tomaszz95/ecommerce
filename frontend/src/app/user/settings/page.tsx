import UserSettingsView from '../../../components/userSettingsPage/UserSettingsView'
import MainLayout from '../../../components/layouts/MainLayout'
import userDummy from '../../../constans/userDummy'
import type { Metadata } from 'next'

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
