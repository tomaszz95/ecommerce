import ProductsListItem from '../categoryPage/productsList/ProductsListItem'

import { categorySingleProductData } from '../../types/types'

import styles from './FavoriteList.module.css'

type ComponentType = {
    favoriteData: categorySingleProductData[]
}

const FavoriteList = ({ favoriteData }: ComponentType) => {
    return (
        <ul className={styles.favList}>
            {favoriteData.map((favorite) => (
                <ProductsListItem product={favorite} key={favorite.uniqueId} isUserFav={true} />
            ))}
        </ul>
    )
}

export default FavoriteList
