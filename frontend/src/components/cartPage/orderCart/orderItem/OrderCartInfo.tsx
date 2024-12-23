import Image from 'next/image'

import { API_URL } from '../../../../constans/url'

import styles from './OrderCartInfo.module.css'

type ComponentType = {
    name: string
    image: string
    amount: number
    orderId: string
}

const OrderCartInfo = ({ name, image, amount, orderId }: ComponentType) => {
    const RemoveItemCountHandler = () => {
        console.log('-1')
    }

    const AddItemCountHandler = () => {
        console.log('+1')
    }

    return (
        <div className={styles.orderItemInfo}>
            <div className={styles.orderItemInfoText}>
                <Image src={`${API_URL}/photos/${image}`} width={1000} height={1000} alt={name} />
                <h3>{name}</h3>
            </div>
            <div className={styles.orderItemInfoCount}>
                <button onClick={RemoveItemCountHandler} aria-label="Add  item">
                    -
                </button>
                <input defaultValue={amount} />
                <button onClick={AddItemCountHandler} aria-label="Add  item">
                    +
                </button>
            </div>
        </div>
    )
}

export default OrderCartInfo
