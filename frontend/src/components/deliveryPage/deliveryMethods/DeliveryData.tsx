import CourierDelivery from './CourierDelivery'
import StoreDelivery from './StoreDelivery'

import styles from './DeliveryData.module.css'

type ComponentType = {
    selectedMethod: string
    selectedMethodDelivery: string
    onSelectMethodDelivery: (value: string) => void
}

const DeliveryData = ({ selectedMethod, selectedMethodDelivery, onSelectMethodDelivery }: ComponentType) => {
    return (
        <form className={styles.methodForm}>
            <h2>{selectedMethod === 'Courier' ? 'The parcel will be delivered by' : 'Select a store'}</h2>
            <div className={styles.methodsContainer}>
                {selectedMethod === 'Courier' ? (
                    <CourierDelivery
                        selectedMethodDelivery={selectedMethodDelivery}
                        onSelectMethodDelivery={onSelectMethodDelivery}
                    />
                ) : (
                    <StoreDelivery
                        selectedMethodDelivery={selectedMethodDelivery}
                        onSelectMethodDelivery={onSelectMethodDelivery}
                    />
                )}
            </div>
        </form>
    )
}

export default DeliveryData
