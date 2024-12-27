import Image from 'next/image'

import OnlinePaymentIcon from '../../../assets/icons/onlinepayment.svg'
import VisaPaymentIcon from '../../../assets/icons/visa.svg'
import TransferPaymentIcon from '../../../assets/icons/transfer.svg'
import WalletPaymentIcon from '../../../assets/icons/wallet.svg'

import styles from './SummaryPayment.module.css'

type ComponentType = {
    payment: string
}

const SummaryPayment = ({ payment }: ComponentType) => {
    const isChosen = payment !== 'Not selected yet'

    const deliveryIcon =
        payment === 'Online payment'
            ? OnlinePaymentIcon
            : payment === 'Payment card'
              ? VisaPaymentIcon
              : payment === 'Traditional transfer'
                ? TransferPaymentIcon
                : WalletPaymentIcon

    const deliveryText =
        payment === 'Online payment'
            ? 'Pay by quick transfer in 5 minutes'
            : payment === 'Payment card'
              ? 'Enter your card details and make the transfer'
              : payment === 'Traditional transfer'
                ? 'Log in to the bank yourself and make the transfer'
                : 'Pay in cash, prepare the deducted amount'

    return (
        <div className={styles.paymentSection}>
            <div className={styles.paymentText}>
                {isChosen ? (
                    <>
                        <b>{payment}</b>
                        <span>{deliveryText}</span>
                    </>
                ) : (
                    <b>Not selected yet</b>
                )}
            </div>
            {isChosen && (
                <div className={styles.paymentInfo}>
                    <Image src={deliveryIcon} alt="" />
                    <span>$0</span>
                </div>
            )}
        </div>
    )
}

export default SummaryPayment
