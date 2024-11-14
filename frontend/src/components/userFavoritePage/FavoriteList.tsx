import ProductsListItem from '../categoryPage/productsList/ProductsListItem'

import { productType } from '../../types/types'

import styles from './FavoriteList.module.css'

type ComponentType = {
    favorites: productType[]
}

const FavoriteList = ({ favorites }: ComponentType) => {
    return (
        <ul className={styles.favList}>
            {favorites.map((favorite) => (
                <ProductsListItem product={favorite} key={favorite.prodId} />
            ))}
        </ul>
    )
}

export default FavoriteList
