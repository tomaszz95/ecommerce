import Image, { StaticImageData } from 'next/image'

import styles from './OrderSummaryItem.module.css'

type ComponentType = {
    productName: string
    productCount: number
    productPrice: number
    productPhoto: StaticImageData
}

const OrderSummaryItem = ({ productName, productCount, productPrice, productPhoto }: ComponentType) => {
    return (
        <li className={styles.summaryItemBox}>
            <Image src={productPhoto} alt="" />
            <div className={styles.summaryItemText}>
                <h4>{productName}</h4>
                <b>${productPrice}</b>
                <p>{productCount} pc.</p>
            </div>
        </li>
    )
}

export default OrderSummaryItem
