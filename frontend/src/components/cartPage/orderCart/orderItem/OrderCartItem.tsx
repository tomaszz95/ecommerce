import Image from 'next/image'
import TrashIcon from '../../../../assets/icons/trash.svg'

import { singleProductType } from '../../../../types/types'

import styles from './OrderCartItem.module.css'
import OrderCartInfo from './OrderCartInfo'
import OrderCartPrice from './OrderCartPrice'

type ComponentType = {
    product: singleProductType
    isLast: boolean
}

const OrderCartItem = ({ product, isLast }: ComponentType) => {
    const removeCartItemHandler = () => {
        console.log('delete')
    }

    return (
        <div className={styles.orderItem}>
            <button className={styles.orderItemTrash} onClick={removeCartItemHandler}>
                <Image src={TrashIcon} alt="" />
            </button>
            <OrderCartInfo product={product} />
            <OrderCartPrice product={product} isLast={isLast} />
        </div>
    )
}

export default OrderCartItem
