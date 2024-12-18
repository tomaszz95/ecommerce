import ProductsListItem from './ProductsListItem'
import SortProducts from './SortProducts'
import Pagination from '../../../components/pagination/Pagination'

import { categorySingleProductData } from '../../../types/types'

import styles from './ProductsList.module.css'

type ComponentType = {
    products: categorySingleProductData[]
    currentPage: number
    totalPages: number
}

const ProductsList = ({ products, currentPage, totalPages }: ComponentType) => {
    return (
        <section className={styles.productsSection}>
            <SortProducts currentPage={currentPage} totalPages={totalPages} />
            {/* <ul className={styles.productsList}>
                {products.length === 0 ? (
                    <p className={styles.noProducts}>No products with selected filters</p>
                ) : (
                    products.map((product) => <ProductsListItem product={product} key={product._id} />)
                )}
            </ul>
            {products.length !== 0 && (
                <div className={styles.productsSectionPagination}>
                    <Pagination productsLength={products.length} />
                </div>
            )} */}
        </section>
    )
}

export default ProductsList
