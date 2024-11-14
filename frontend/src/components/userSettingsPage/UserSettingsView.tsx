'use client'

import UserSettingsForm from './UserSettingsForm'
import UserSettingsPassword from './UserSettingsPassword'

import { userType } from '../../types/types'

import styles from './UserSettingsView.module.css'

type ComponentType = {
    userData: userType
}

const UserSettingsView = ({ userData }: ComponentType) => {
    return (
        <div className={styles.container}>
            <h1>Your settings</h1>
            <div className={styles.settings}>
                <UserSettingsForm userData={userData} />
                <UserSettingsPassword password={userData.credentials.password} />
            </div>
        </div>
    )
}

export default UserSettingsView
