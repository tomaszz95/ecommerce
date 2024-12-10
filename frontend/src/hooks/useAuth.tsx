import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { API_URL } from '../constans/url'

const useAuth = () => {
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/api/auth/protected`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!response.ok || response.status === 401) {
                    router.push('/')
                }
            } catch (error) {
                router.push('/')
            }
        }

        checkAuth()
    }, [router])
}

export default useAuth
