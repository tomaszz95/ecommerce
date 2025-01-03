'use client'

import { useEffect, useState } from 'react'

import useProtect from '../../../hooks/useProtect'
import useMetadata from '../../../hooks/useMetadata'

import MainLayout from '../../../components/layouts/MainLayout'
import UserSettingsView from '../../../components/userSettingsPage/UserSettingsView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'
import ServerError from '../../../components/serverError/ServerError'

import { API_URL } from '../../../constans/url'

const UserSettingsPage = () => {
    useProtect({ from: 'Guest' })
    useMetadata({ title: 'Settings', description: 'NeXtPC settings page' })

    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [serverError, setServerError] = useState('Something went wrong')

    useEffect(() => {
        setIsLoading(true)
        const getUserData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/users`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.msg || 'User not found')
                }

                const data = await response.json()

                setUserData(data)
                setIsLoading(false)
            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

                setServerError(errorMessage)
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

    if (!isLoading && userData === null) {
        return (
            <MainLayout>
                <ServerError errorText={serverError} errorMsg="Please try again later" />
            </MainLayout>
        )
    }

    return <MainLayout>{userData !== null && <UserSettingsView userData={userData} />}</MainLayout>
}

export default UserSettingsPage
