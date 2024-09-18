import Image from 'next/image'
import Link from 'next/link'

import User from '../../assets/icons/user.png'
import Contact from '../../assets/icons/contact.png'
import Cart from '../../assets/icons/cart.png'

import styles from './HeaderOptions.module.css'

const HeaderOptions = () => {
    return (
        <div className={styles.headerOptions}>
            <Link className={styles.headerOption} href="/login">
                <Image src={User} alt="" />
                <p>Login</p>
            </Link>
            <Link className={styles.headerOption} href="/contact">
                <Image src={Contact} alt="" />
                <p>Contact</p>
            </Link>
            <Link className={styles.headerOption} href="/cart">
                <Image src={Cart} alt="" />
                <p>Cart</p>
            </Link>
        </div>
    )
}

export default HeaderOptions
