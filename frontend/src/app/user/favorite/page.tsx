'use client'

import { useState, useEffect } from 'react'

import useProtect from '../../../hooks/useProtect'

import MainLayout from '../../../components/layouts/MainLayout'
import FavoriteView from '../../../components/userFavoritePage/FavoriteView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'
import ServerError from '../../../components/serverError/ServerError'

import { API_URL } from '../../../constans/url'

const UserFavoritePage = () => {
    useProtect({ from: 'Guest' })

    const [favoriteData, setFavoriteData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        const getUserData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/users/getUserFavorites`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.msg || 'Favorites products not found')
                }

                const data = await response.json()

                setFavoriteData(data.favorites)
                setIsLoading(false)
            } catch (err: any) {
                setServerError(err.message)
                setIsLoading(false)
            }
        }

        getUserData()
    }, [])

    if (isLoading) {
        return (
            <MainLayout>
                <LoadingSpinner />
            </MainLayout>
        )
    }

    if (!isLoading && serverError !== '') {
        return (
            <MainLayout>
                <ServerError errorText={serverError} errorMsg="Please try again later" />
            </MainLayout>
        )
    }

    if (!isLoading && serverError === '' && favoriteData.length === 0) {
        return (
            <MainLayout>
                <ServerError
                    errorText="No favorite products found for the user"
                    errorMsg="If you want to add a product to your favorites, click the heart next to the item's photo"
                />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <FavoriteView favoriteData={favoriteData} />
        </MainLayout>
    )
}

export default UserFavoritePage
