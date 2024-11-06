import OrderMethodItem from '../../orderSummary/OrderMethodItem'

import WarsawIcon from '../../../assets/icons/warsaw.svg'
import CracowIcon from '../../../assets/icons/cracow.svg'
import KatowiceIcon from '../../../assets/icons/katowice.svg'

type ComponentType = {
    selectedMethodDelivery: string
    onSelectMethodDelivery: (value: string) => void
}

const StoreDelivery = ({ selectedMethodDelivery, onSelectMethodDelivery }: ComponentType) => {
    return (
        <>
            <OrderMethodItem
                onSelectMethod={onSelectMethodDelivery}
                selectedMethod={selectedMethodDelivery}
                inputValue="Warsaw"
                additionalText="ul. Pogodna 3"
                icon={WarsawIcon}
            />
            <OrderMethodItem
                onSelectMethod={onSelectMethodDelivery}
                selectedMethod={selectedMethodDelivery}
                inputValue="Cracow"
                additionalText="ul. Jagodowa 2"
                icon={CracowIcon}
            />
            <OrderMethodItem
                onSelectMethod={onSelectMethodDelivery}
                selectedMethod={selectedMethodDelivery}
                inputValue="Katowice"
                additionalText="ul. Szeroka 5"
                icon={KatowiceIcon}
            />
        </>
    )
}

export default StoreDelivery
