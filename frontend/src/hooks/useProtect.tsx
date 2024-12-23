'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { API_URL } from '../constans/url'

type ProtectProps = {
    from: string
}

const useProtect = ({ from }: ProtectProps) => {
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/api/auth/isLogged`, {
                    method: 'GET',
                    credentials: 'include',
                })

                const data = await response.json()

                if (data.message === from && from === 'User') {
                    router.push('/')
                } else if (data.message === from && from === 'Guest') {
                    router.push('/login')
                }
            } catch (error) {
                router.push('/')
            }
        }

        checkAuth()
    }, [router])
}

export default useProtect
