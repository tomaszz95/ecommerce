import SingleProduct from '../../singleProduct/SingleProduct'

import dummyProducts from '../../../constans/dummyProducts'
import styles from './RecommendedProductsBox.module.css'

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
                />
            ))}
        </div>
    )
}

export default RecommendedProductsBox
