import Image from 'next/image'
import Link from 'next/link'

import UserIcon from '../../assets/icons/user.svg'
import ContactIcon from '../../assets/icons/contact.svg'
import CartIcon from '../../assets/icons/cart.svg'

import styles from './HeaderOptions.module.css'

const HeaderOptions = () => {
    return (
        <div className={styles.headerOptions}>
            <Link className={styles.headerOption} href="/login">
                <Image src={UserIcon} alt="" />
                <p>Login</p>
            </Link>
            <Link className={styles.headerOption} href="/contact">
                <Image src={ContactIcon} alt="" />
                <p>Contact</p>
            </Link>
            <Link className={styles.headerOption} href="/cart">
                <Image src={CartIcon} alt="" />
                <p>Cart</p>
            </Link>
        </div>
    )
}

export default HeaderOptions
