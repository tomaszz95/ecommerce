import styles from './SummaryAddress.module.css'

type ComponentType = {
    summaryAddress: {
        name: string
        address: string
        postalCode: string
        city: string
        phone: string
        email: string
    }
    singleOrder: boolean
    isAddressChosen: boolean
}

const SummaryAddress = ({ summaryAddress, singleOrder, isAddressChosen }: ComponentType) => {
    return (
        <div className={styles.summaryAddressBox}>
            {isAddressChosen ? (
                <>
                    <b>{summaryAddress.name}</b>
                    <span>{summaryAddress.address}</span>
                    <div className={styles.summaryAddressCity}>
                        <span>{summaryAddress.postalCode}</span>
                        <span>{summaryAddress.city}</span>
                    </div>
                    <span>{summaryAddress.phone}</span>
                    <span>{summaryAddress.email}</span>
                    {!singleOrder && <i>We will send information about your order to this e-mail address.</i>}
                </>
            ) : (
                <b>Not selected yet</b>
            )}
        </div>
    )
}

export default SummaryAddress
