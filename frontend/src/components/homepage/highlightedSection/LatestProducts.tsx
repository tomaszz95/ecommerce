import SingleProduct from '../../product/SingleProduct'

import dummyProducts from '../../../constans/dummyProducts'

import styles from './LatestProducts.module.css'

const RecommendedProductsBox = () => {
    return (
        <div className={styles.container}>
            {dummyProducts.map((item) => (
                <SingleProduct
                    name={item.name}
                    prodId={item.prodId}
                    mainImage={item.mainImage}
                    category={item.category}
                    price={item.price}
                    key={item.prodId}
                    size="small"
                />
            ))}
        </div>
    )
}

export default RecommendedProductsBox
