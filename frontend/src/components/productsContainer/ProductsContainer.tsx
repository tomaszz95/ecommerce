import styles from './ProductsContainer.module.css'

type ComponentType = {
    children: React.ReactNode
}

const ProductsContainer = ({ children }: ComponentType) => {
    return <div className={styles.container}>{children}</div>
}

export default ProductsContainer
