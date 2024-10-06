import Image from 'next/image'

import PhoneIcon from '../../../assets/icons/phone.svg'

import styles from './FooterContact.module.css'

const FooterContact = () => {
    return (
        <div className={styles.container}>
            <Image src={PhoneIcon} alt="" />
            <div className={styles.contactContainer}>
                <a href="tel:+00 000 00 00">+00 000 00 00</a>
                <div className={styles.textBox}>
                    <span>mon. - fri</span>
                    <span>8.00 - 21.00</span>
                </div>
                <div className={styles.textBox}>
                    <span>sat. - sun</span>
                    <span>10.00 - 19.00</span>
                </div>
            </div>
        </div>
    )
}

export default FooterContact
