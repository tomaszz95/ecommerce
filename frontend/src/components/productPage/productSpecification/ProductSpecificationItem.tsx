import styles from './ProductSpecificationItem.module.css'

type CompontentType = {
    name: string
    value: string
}

const ProductSpecificationItem = ({ name, value }: CompontentType) => {
    const valuesArray = value.includes(',') ? value.split(',') : [value]

    return (
        <tr className={styles.productSpecificationItem}>
            <td>
                <strong>{name}:</strong>
            </td>
            <td>
                {valuesArray.map((item, index) => (
                    <div key={index}>{item.trim()}</div>
                ))}
            </td>
        </tr>
    )
}

export default ProductSpecificationItem
