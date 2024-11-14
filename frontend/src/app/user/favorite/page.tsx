import type { Metadata } from 'next'
import MainLayout from '../../../components/layouts/MainLayout'
import FavoriteView from '../../../components/userFavoritePage/FavoriteView'

import favoriteProducts from '../../../constans/favoriteProducts'

export const metadata: Metadata = {
    title: 'NeXtPC - Favorite products',
    description: 'neXtPC app homepage',
}

const UserFavoritePage = () => {
    return (
        <MainLayout>
            <FavoriteView favorites={favoriteProducts} />
        </MainLayout>
    )
}

export default UserFavoritePage
