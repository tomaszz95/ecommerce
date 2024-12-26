'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import FavoriteModal from './FavoriteModal'

import FavoriteIcon from '../../../../assets/icons/favoritefill.svg'

import { API_URL } from '../../../../constans/url'

import styles from './FavoriteButton.module.css'

type ComponentType = {
    productId: string
    uniqueId: string
}

const FavoriteButton = ({ productId, uniqueId }: ComponentType) => {
    const [isLogin, setIsLogin] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [isExiting, setIsExiting] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const checkAuthAndFavorites = async () => {
            try {
                const authResponse = await fetch(`${API_URL}/api/auth/isLogged`, {
                    method: 'GET',
                    credentials: 'include',
                })
                const authData = await authResponse.json()

                if (authData.message === 'User') {
                    setIsLogin(true)
                } else {
                    return setIsLogin(false)
                }

                const favoritesResponse = await fetch(`${API_URL}/api/users/getUserFavorites`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!favoritesResponse.ok) {
                    throw new Error('Could not fetch favorites.')
                }

                const favData = await favoritesResponse.json()

                const isProductFavorite = favData.favorites.some(
                    (item: { uniqueId: string }) => item.uniqueId === uniqueId.toString(),
                )

                setIsFavorite(isProductFavorite)
            } catch (err: any) {
                setModalMessage(err.message || 'Something went wrong.')
                setShowModal(true)
            }
        }

        checkAuthAndFavorites()
    }, [])

    const toggleFavoriteHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/api/users/updateUserFavorites`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: productId,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                throw new Error(errorData.msg || 'Something went wrong.')
            }

            const data = await response.json()

            setModalMessage(data.msg)

            setIsFavorite(data.msg === 'Product added to favorites')
            setShowModal(true)
        } catch (err: any) {
            setModalMessage(err.message)
            setShowModal(true)
        }

        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
                setShowModal(false)
                setIsExiting(false)
            }, 500)
        }, 3000)
    }

    const cleanupTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
    }

    return (
        <>
            {isLogin && (
                <button
                    type="button"
                    className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''} `}
                    onClick={() => {
                        cleanupTimer()
                        toggleFavoriteHandler()
                    }}
                    aria-label="Click to favorite"
                >
                    <Image src={FavoriteIcon} alt="" />
                </button>
            )}
            {showModal && <FavoriteModal isExiting={isExiting}>{modalMessage}</FavoriteModal>}
        </>
    )
}

export default FavoriteButton
