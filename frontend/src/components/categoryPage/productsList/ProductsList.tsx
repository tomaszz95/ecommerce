import { productType } from '../../../types/types'

import styles from './ProductsList.module.css'
import ProductsListItem from './ProductsListItem'
import SortProducts from './SortProducts'

type ComponentType = {
    products: productType[]
}

const ProductsList = ({ products }: ComponentType) => {
    return (
        <section className={styles.productsSection}>
            <SortProducts productsLength={products.length} />
            <ul>
                {products.map((product) => (
                    <ProductsListItem product={product} key={product.prodId} />
                ))}
            </ul>
        </section>
    )
}

export default ProductsList
