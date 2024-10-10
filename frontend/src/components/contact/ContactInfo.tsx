import styles from './ContactInfo.module.css'

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <h2>Contact</h2>
            <div className={styles.contactInfoContainer}>
                <div className={styles.contactInfoBox}>
                    <h3>Online customer advisors</h3>
                    <p>Advisors are available on working days from 8:00 a.m. to 5:00 p.m.</p>
                    <p>Write to us (using the form below) or call our hotline: +00 000 00 00</p>
                </div>
                <div className={styles.contactInfoBox}>
                    <h3>Dedicated hotline for companies</h3>
                    <p>
                        Open Monday to Friday from 8:00 a.m. to 5:00 p.m., Saturdays and Sundays: 9:00 a.m. - 4:00 p.m.
                    </p>
                    <p>Call our hotline: +00 000 00 00</p>
                </div>
            </div>
            <div className={styles.contactInfoCompany}>
                <h3>Company details</h3>
                <div>
                    <span className={styles.contactInfoCompanyTitle}>Company name:</span>
                    <span>NeXtPC</span>
                </div>
                <div>
                    <span className={styles.contactInfoCompanyTitle}>Company address:</span>
                    <span>Warsaw, Main Street 00, 00-000 Warsaw</span>
                </div>
                <div>
                    <span className={styles.contactInfoCompanyTitle}>Company phone:</span>
                    <span>+00 000 00 00</span>
                </div>
                <div>
                    <span className={styles.contactInfoCompanyTitle}>Company email:</span>
                    <span>nextpc@nextpc.com</span>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
