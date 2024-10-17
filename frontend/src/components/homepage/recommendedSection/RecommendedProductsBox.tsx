import SingleProduct from '../../productCarousel/SingleProduct'

import { productType } from '../../../types/types'

import styles from './RecommendedProductsBox.module.css'

type ComponentType = {
    products: productType[]
}

const RecommendedProductsBox = ({ products }: ComponentType) => {
    return (
        <div className={styles.container}>
            {products.map((item) => (
                <SingleProduct
                    name={item.name}
                    prodId={item.prodId}
                    mainImage={item.images[0]}
                    category={item.category.name}
                    categoryLink={item.category.link}
                    price={item.price}
                    key={item.prodId}
                    size="big"
                />
            ))}
        </div>
    )
}

export default RecommendedProductsBox
