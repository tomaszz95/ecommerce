import { productType } from '../../types/types'
import FavoriteList from './FavoriteList'
import styles from './FavoriteView.module.css'

type ComponentType = {
    favorites: productType[]
}

const FavoriteView = ({ favorites }: ComponentType) => {
    return (
        <section className={styles.favSection}>
            <h1>Favorite products</h1>
            {favorites.length === 0 ? (
                <p className={styles.errorText}>No favorite products</p>
            ) : (
                <FavoriteList favorites={favorites} />
            )}
        </section>
    )
}

export default FavoriteView
