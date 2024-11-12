import styles from './OrderItem.module.css'
import { orderType } from '../../types/types'

type ComponentType = {
    order: orderType
}

const OrderItem = ({ order }: ComponentType) => {
    return <div>OrderItem</div>
}

export default OrderItem
