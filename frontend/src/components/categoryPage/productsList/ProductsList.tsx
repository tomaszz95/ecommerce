import Pagination from '../../../components/pagination/Pagination'
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
            <ul className={styles.productsList}>
                {products.length === 0 ? (
                    <p className={styles.noProducts}>No products with selected filters</p>
                ) : (
                    products.map((product) => <ProductsListItem product={product} key={product.prodId} />)
                )}
            </ul>
            <div className={styles.productsSectionPagination}>
                <Pagination productsLength={products.length} />
            </div>
        </section>
    )
}

export default ProductsList
