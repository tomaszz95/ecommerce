'use client'

import { useState, useEffect } from 'react'

import MainLayout from '../../../components/layouts/MainLayout'
import UserSettingsView from '../../../components/userSettingsPage/UserSettingsView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'

import useAuth from '../../../hooks/useAuth'
import userDummy from '../../../constans/userDummy'

import { userType } from '../../../types/types'

const UserSettingsPage = () => {
    useAuth()

    const [user, setUser] = useState<userType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setUser(userDummy)
            } catch (error) {
                console.error('Error fetching user data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUserData()
    }, [])

    useEffect(() => {
        if (user) {
            document.title = 'NeXtPC - User settings'
            const metaDescription = document.querySelector('meta[name="description"]')
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Manage your user settings in NeXtPC app')
            }
        }
    }, [user])

    return (
        <MainLayout>
            {loading ? <LoadingSpinner /> : <UserSettingsView userData={user || ({} as userType)} />}
        </MainLayout>
    )
}

export default UserSettingsPage
