import FavoriteView from '../../../components/userFavoritePage/FavoriteView'
import MainLayout from '../../../components/layouts/MainLayout'
import favoriteProducts from '../../../constans/favoriteProducts'

const UserFavoritePage = () => {
    return (
        <MainLayout>
            <FavoriteView favorites={favoriteProducts} />
        </MainLayout>
    )
}

export default UserFavoritePage
