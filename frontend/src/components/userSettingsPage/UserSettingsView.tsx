'use client'

import { userType } from '../../types/types'
import UserSettingsForm from './UserSettingsForm'
import UserSettingsPassword from './UserSettingsPassword'
import styles from './UserSettingsView.module.css'

type ComponentType = {
    userData: userType
}

const UserSettingsView = ({ userData }: ComponentType) => {
    return (
        <div className={styles.settings}>
            <UserSettingsForm userData={userData} />
            <UserSettingsPassword password={userData.credentials.password} />
        </div>
    )
}

export default UserSettingsView
