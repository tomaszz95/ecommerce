import Image from 'next/image'

import Phone from '../../assets/icons/phone.svg'

import styles from './AuthFooter.module.css'

const AuthFooter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerBox}>
                <div className={styles.contact}>
                    <p>Do you have any questions?</p>
                    <div className={styles.contactPhone}>
                        <p>Call us</p>
                        <Image src={Phone} alt="" />
                        <a href="tel:+00 000 00 00">+00 000 00 00</a>
                    </div>
                </div>
                <div className={styles.info}>
                    The administrator of your personal data is neXtPC based in Warsaw at Main Street 00, 00-000 Warsaw.
                </div>
            </div>
        </div>
    )
}

export default AuthFooter
