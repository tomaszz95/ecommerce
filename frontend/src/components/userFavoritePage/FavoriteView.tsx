import FavoriteList from './FavoriteList'

import { categorySingleProductData } from '../../types/types'

import styles from './FavoriteView.module.css'

type ComponentType = {
    favoriteData: categorySingleProductData[]
}

const FavoriteView = ({ favoriteData }: ComponentType) => {
    return (
        <section className={styles.favSection}>
            <h1>Favorite products</h1>
            <FavoriteList favoriteData={favoriteData} />
        </section>
    )
}

export default FavoriteView
