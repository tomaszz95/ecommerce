import DeliveryMethodItem from './DeliveryMethodItem'

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
                <DeliveryMethodItem
                    onSelectMethod={onSelectMethod}
                    selectedMethod={selectedMethod}
                    inputValue="Courier"
                    additionalText="Delivery tomorrow"
                    icon={TruckIcon}
                    iconText="$0"
                />
                <DeliveryMethodItem
                    onSelectMethod={onSelectMethod}
                    selectedMethod={selectedMethod}
                    inputValue="Store"
                    additionalText="Select a salon, to find out the date"
                    icon={ShopIcon}
                    iconText="$0"
                />
            </div>
        </form>
    )
}

export default DeliveryMethod
