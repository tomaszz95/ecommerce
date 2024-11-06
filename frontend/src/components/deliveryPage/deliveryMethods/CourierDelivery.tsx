import OrderMethodItem from '../../orderSummary/OrderMethodItem'

import FeedExIcon from '../../../assets/icons/feedex.svg'
import InpostIcon from '../../../assets/icons/inpost.svg'
import UpsIcon from '../../../assets/icons/ups.svg'

type ComponentType = {
    selectedMethodDelivery: string
    onSelectMethodDelivery: (value: string) => void
}

const CourierDelivery = ({ selectedMethodDelivery, onSelectMethodDelivery }: ComponentType) => {
    return (
        <>
            <OrderMethodItem
                onSelectMethod={onSelectMethodDelivery}
                selectedMethod={selectedMethodDelivery}
                inputValue="FeedEx"
                icon={FeedExIcon}
                iconsBig={true}
                iconText="$0"
            />
            <OrderMethodItem
                onSelectMethod={onSelectMethodDelivery}
                selectedMethod={selectedMethodDelivery}
                inputValue="Inpost"
                icon={InpostIcon}
                iconsBig={true}
                iconText="$0"
            />
            <OrderMethodItem
                onSelectMethod={onSelectMethodDelivery}
                selectedMethod={selectedMethodDelivery}
                inputValue="UPS"
                icon={UpsIcon}
                iconsBig={true}
                iconText="$0"
            />
        </>
    )
}

export default CourierDelivery
