import Link from 'next/link'
import Image from 'next/image'

import SettingsIcon from '../../../assets/icons/settings.svg'
import FavoriteIcon from '../../../assets/icons/favorite.svg'
import OrdersIcon from '../../../assets/icons/orders.svg'
import LogoutIcon from '../../../assets/icons/logout.svg'

import styles from './ProfileMenu.module.css'

const ProfileMenu = () => {
    return (
        <div className={styles.profileMenu}>
            <Link className={styles.profileMenuItem} href="/user/settings">
                <Image src={SettingsIcon} alt="" />
                <span>Settings</span>
            </Link>
            <Link className={styles.profileMenuItem} href="/user/favorite">
                <Image src={FavoriteIcon} alt="" />
                <span>Favorite</span>
            </Link>
            <Link className={styles.profileMenuItem} href="/user/orders">
                <Image src={OrdersIcon} alt="" />
                <span>Orders</span>
            </Link>
            <Link className={styles.profileMenuItem} href="/logout">
                <Image src={LogoutIcon} alt="" />
                <span>Logout</span>
            </Link>
        </div>
    )
}

export default ProfileMenu
