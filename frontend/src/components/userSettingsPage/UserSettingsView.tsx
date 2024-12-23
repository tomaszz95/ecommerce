import UserSettingsForm from './UserSettingsForm'
import UserSettingsPassword from './UserSettingsPassword'

import { userSettingType } from '../../types/types'

import styles from './UserSettingsView.module.css'

type ComponentType = {
    userData: userSettingType
}

const UserSettingsView = ({ userData }: ComponentType) => {
    return (
        <div className={styles.container}>
            <h1>Your settings</h1>
            <div className={styles.settings}>
                <UserSettingsForm userData={userData} />
                {/* <UserSettingsPassword /> */}
            </div>
        </div>
    )
}

export default UserSettingsView
