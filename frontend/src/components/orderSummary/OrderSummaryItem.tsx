import Image from 'next/image'

import { API_URL } from '../../constans/url'

import styles from './OrderSummaryItem.module.css'

type ComponentType = {
    productName: string
    productCount: number
    productPrice: number
    productPhoto: string
}

const OrderSummaryItem = ({ productName, productCount, productPrice, productPhoto }: ComponentType) => {
    return (
        <li className={styles.summaryItemBox}>
            <Image src={`${API_URL}/photos/${productPhoto}`} alt="" width={1000} height={1000} />
            <div className={styles.summaryItemText}>
                <h4>{productName}</h4>
                <b>${productPrice}</b>
                <p>{productCount} pc.</p>
            </div>
        </li>
    )
}

export default OrderSummaryItem
