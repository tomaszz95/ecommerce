import Image from 'next/image'

import MailIcon from '../../assets/icons/contact.svg'
import WhatsupIcon from '../../assets/icons/whatsup.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'

import styles from './FooterSocials.module.css'

const FooterSocials = () => {
    return (
        <div className={styles.container}>
            <div className={styles.socialsBox}>
                <Image src={MailIcon} alt="" />
                <a href="mailto:nextpc@nextpc.com">nextpc@nextpc.com</a>
            </div>
            <div className={styles.socialsBox}>
                <Image src={WhatsupIcon} alt="" />
                <a href="https://wa.me/000000000">WhatsApp</a>
            </div>
            <div className={styles.socialsBox}>
                <Image src={FacebookIcon} alt="" />
                <a href="https://facebook.com/nextpc">Facebook</a>
            </div>
        </div>
    )
}

export default FooterSocials
