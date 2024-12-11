'use client'

import { useState, useEffect } from 'react'

import MainLayout from '../../../components/layouts/MainLayout'
import FavoriteView from '../../../components/userFavoritePage/FavoriteView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'

import favoriteProducts from '../../../constans/favoriteProducts'

import useProtectFromGuests from '../../../hooks/useProtect'

import { productType } from '../../../types/types'

const UserFavoritePage = () => {
    useProtectFromGuests()

    const [favorites, setFavorites] = useState<productType[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFavorites = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setFavorites(favoriteProducts)
            } catch (error) {
                console.error('Error fetching favorite products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchFavorites()
    }, [])

    useEffect(() => {
        document.title = 'NeXtPC - Favorite products'
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'View your favorite products on NeXtPC')
        }
    }, [])

    return <MainLayout>{loading ? <LoadingSpinner /> : <FavoriteView favorites={favorites || []} />}</MainLayout>
}

export default UserFavoritePage
