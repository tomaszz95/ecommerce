import OrderMethodItem from '../../orderSummary/OrderMethodItem'
import OnlinePaymentIcon from '../../../assets/icons/onlinepayment.svg'
import VisaPaymentIcon from '../../../assets/icons/visa.svg'
import TransferPaymentIcon from '../../../assets/icons/transfer.svg'
import WalletPaymentIcon from '../../../assets/icons/wallet.svg'
import styles from './PaymentMethod.module.css'

type ComponentType = {
    onSelectPayment: (value: string) => void
    selectedPayment: string
}

const PaymentMethod = ({ onSelectPayment, selectedPayment }: ComponentType) => {
    return (
        <form className={styles.paymentForm}>
            <h2>Payment method</h2>
            <div className={styles.paymentContainer}>
                <OrderMethodItem
                    onSelectMethod={onSelectPayment}
                    selectedMethod={selectedPayment}
                    inputValue="Online payment"
                    additionalText="Pay by quick transfer in 5 minutes"
                    icon={OnlinePaymentIcon}
                    iconText="$0"
                    iconsBig={true}
                />
                <OrderMethodItem
                    onSelectMethod={onSelectPayment}
                    selectedMethod={selectedPayment}
                    inputValue="Payment card"
                    additionalText="Enter your card details and make the transfer"
                    icon={VisaPaymentIcon}
                    iconText="$0"
                    iconsBig={true}
                />
                <OrderMethodItem
                    onSelectMethod={onSelectPayment}
                    selectedMethod={selectedPayment}
                    inputValue="Traditional transfer"
                    additionalText="Log in to the bank yourself and make the transfer"
                    icon={TransferPaymentIcon}
                    iconText="$0"
                />
                <OrderMethodItem
                    onSelectMethod={onSelectPayment}
                    selectedMethod={selectedPayment}
                    inputValue="Upon receipt"
                    additionalText="Pay in cash, prepare the deducted amount"
                    icon={WalletPaymentIcon}
                    iconText="$0"
                />
            </div>
        </form>
    )
}

export default PaymentMethod
