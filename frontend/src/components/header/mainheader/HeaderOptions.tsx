import Image from 'next/image'

import User from '../../../assets/icons/user.png'
import Phone from '../../../assets/icons/phone.png'
import Cart from '../../../assets/icons/cart.png'

import styles from './HeaderOptions.module.css'

const HeaderOptions = () => {
    return (
        <div className={styles.headerOptions}>
            <a className={styles.headerOption}>
                <Image src={User} alt="" />
                <p>Login</p>
            </a>
            <a className={styles.headerOption}>
                <Image src={Phone} alt="" />
                <p>Contact</p>
            </a>
            <a className={styles.headerOption}>
                <Image src={Cart} alt="" />
                <p>Cart</p>
            </a>
        </div>
    )
}

export default HeaderOptions
