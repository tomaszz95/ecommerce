import styles from './ContactBox.module.css'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const ContactBox = () => {
    return (
        <section className={styles.contactBoxSection}>
            <ContactInfo />
            <ContactForm />
        </section>
    )
}

export default ContactBox
