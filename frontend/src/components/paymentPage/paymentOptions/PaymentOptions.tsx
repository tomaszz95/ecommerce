import PaymentMethod from './PaymentMethod'
import PaymentRegulations from './PaymentRegulations'

type ComponentType = {
    selectedPayment: string
    onSelectPayment: (value: string) => void
    onAcceptRegulations: (value: boolean) => void
}

const PaymentOptions = ({ selectedPayment, onSelectPayment, onAcceptRegulations }: ComponentType) => {
    return (
        <>
            <PaymentMethod onSelectPayment={onSelectPayment} selectedPayment={selectedPayment} />
            <PaymentRegulations onAcceptRegulations={onAcceptRegulations} />
        </>
    )
}

export default PaymentOptions
