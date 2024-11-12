import styles from './FavoriteList.module.css'
import { productType } from '../../types/types'
import ProductsListItem from '../categoryPage/productsList/ProductsListItem'

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
