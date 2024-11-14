import styles from './ContactInfoCompany.module.css'

const ContactInfoCompany = () => {
    return (
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
    )
}

export default ContactInfoCompany
