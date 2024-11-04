import ContactForm from './ContactForm'
import ContactInfo from './contactInfo/ContactInfo'

import styles from './ContactBox.module.css'

const ContactBox = () => {
    return (
        <section className={styles.contactBoxSection}>
            <ContactInfo />
            <ContactForm />
        </section>
    )
}

export default ContactBox
