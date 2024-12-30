import ContactInfoCompany from './ContactInfoCompany'
import ContactInfoCustomers from './ContactInfoCustomers'

import styles from './ContactInfo.module.css'

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <h2>Contact</h2>
            <ContactInfoCustomers />
            <ContactInfoCompany />
        </div>
    )
}

export default ContactInfo
