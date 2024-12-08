import SingleProduct from '../../carousels/productCarousel/SingleProduct'

import { homepageSingleProductData } from '../../../types/types'

import styles from './LatestProducts.module.css'

type ComponentType = {
    products: homepageSingleProductData[]
}

const LatestProductsBox = ({ products }: ComponentType) => {
    return (
        <div className={styles.container}>
            {products.map((item) => (
                <SingleProduct
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    promotion={item.promotion}
                    uniqueId={item.uniqueId}
                    image={item.image}
                    key={item._id}
                />
            ))}
        </div>
    )
}

export default LatestProductsBox
