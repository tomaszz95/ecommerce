import Image from 'next/image'

import { singleProductType } from '../../../../types/types'

import styles from './OrderCartInfo.module.css'

type ComponentType = {
    product: singleProductType
}

const OrderCartInfo = ({ product }: ComponentType) => {
    const RemoveItemCountHandler = () => {
        console.log('-1')
    }

    const AddItemCountHandler = () => {
        console.log('+1')
    }

    return (
        <div className={styles.orderItemInfo}>
            <div className={styles.orderItemInfoText}>
                <Image src={product.product.image} alt={product.product.name} />
                <h3>{product.product.name}</h3>
            </div>
            <div className={styles.orderItemInfoCount}>
                <button onClick={RemoveItemCountHandler} aria-label="Add  item">
                    -
                </button>
                <input defaultValue={product.count} />
                <button onClick={AddItemCountHandler} aria-label="Add  item">
                    +
                </button>
            </div>
        </div>
    )
}

export default OrderCartInfo
