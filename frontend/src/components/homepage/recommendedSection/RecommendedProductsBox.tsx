import SingleProduct from '../../productCarousel/SingleProduct'

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
                    categoryLink={item.categoryLink}
                    price={item.price}
                    key={item.prodId}
                    size="big"
                />
            ))}
        </div>
    )
}

export default RecommendedProductsBox
