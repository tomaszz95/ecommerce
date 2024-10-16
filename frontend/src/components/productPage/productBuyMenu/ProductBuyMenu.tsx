import styles from './ProductBuyMenu.module.css'

type ComponentType = {
    price: number
    stock: number
    productId: string
}

const ProductBuyMenu = ({ price, stock, productId }: ComponentType) => {
    return <div>ProductBuyMenu</div>
}

export default ProductBuyMenu
