import OrderMethodItem from '../../orderSummary/OrderMethodItem'

import TruckIcon from '../../../assets/icons/truck.svg'
import ShopIcon from '../../../assets/icons/shop.svg'

import styles from './DeliveryMethod.module.css'

type ComponentType = {
    onSelectMethod: (value: string) => void
    selectedMethod: string
}

const DeliveryMethod = ({ onSelectMethod, selectedMethod }: ComponentType) => {
    return (
        <form className={styles.methodForm}>
            <h2>Delivery method</h2>
            <div className={styles.methodsContainer}>
                <OrderMethodItem
                    onSelectMethod={onSelectMethod}
                    selectedMethod={selectedMethod}
                    inputValue="Courier"
                    additionalText="Delivery tomorrow"
                    icon={TruckIcon}
                    iconText="$0"
                />
                <OrderMethodItem
                    onSelectMethod={onSelectMethod}
                    selectedMethod={selectedMethod}
                    inputValue="Store"
                    additionalText="Select a store"
                    icon={ShopIcon}
                    iconText="$0"
                />
            </div>
        </form>
    )
}

export default DeliveryMethod
