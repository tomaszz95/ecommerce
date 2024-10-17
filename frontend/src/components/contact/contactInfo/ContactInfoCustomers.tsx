import styles from './ContactInfoCustomers.module.css'

const ContactInfoCustomers = () => {
    return (
        <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfoBox}>
                <h3>Online customer advisors</h3>
                <p>Advisors are available on working days from 8:00 a.m. to 5:00 p.m.</p>
                <p>Write to us (using the form below) or call our hotline: +00 000 00 00</p>
            </div>
            <div className={styles.contactInfoBox}>
                <h3>Dedicated hotline for companies</h3>
                <p>Open Monday to Friday from 8:00 a.m. to 5:00 p.m., Saturdays and Sundays: 9:00 a.m. - 4:00 p.m.</p>
                <p>Call our hotline: +00 000 00 00</p>
            </div>
        </div>
    )
}

export default ContactInfoCustomers
