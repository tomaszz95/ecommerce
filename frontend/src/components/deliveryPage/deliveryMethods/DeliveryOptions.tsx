import DeliveryData from './DeliveryData'
import DeliveryMethod from './DeliveryMethod'

type ComponentType = {
    selectedMethod: string
    selectedMethodDelivery: string
    onSelectMethod: (value: string) => void
    onSelectMethodDelivery: (value: string) => void
}

const DeliveryOptions = ({
    selectedMethod,
    selectedMethodDelivery,
    onSelectMethod,
    onSelectMethodDelivery,
}: ComponentType) => {
    return (
        <>
            <DeliveryMethod onSelectMethod={onSelectMethod} selectedMethod={selectedMethod} />
            <DeliveryData
                selectedMethod={selectedMethod}
                selectedMethodDelivery={selectedMethodDelivery}
                onSelectMethodDelivery={onSelectMethodDelivery}
            />
        </>
    )
}

export default DeliveryOptions
