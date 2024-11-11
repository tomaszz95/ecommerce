'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import FavoriteIcon from '../../../assets/icons/favoritefill.svg'
import styles from './FavoriteButton.module.css'
import FavoriteModal from './FavoriteModal'

type ComponentType = {
    productId: string
}

const FavoriteButton = ({ productId }: ComponentType) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isExiting, setIsExiting] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const toggleFavoriteHandler = () => {
        setIsFavorite((prevValue) => !prevValue)
        setShowModal(true)

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
            <button
                type="button"
                className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''} `}
                onClick={() => {
                    cleanupTimer()
                    toggleFavoriteHandler()
                }}
            >
                <Image src={FavoriteIcon} alt="" />
            </button>
            {showModal && (
                <FavoriteModal isExiting={isExiting}>
                    {isFavorite ? 'Product added to favorites' : 'Product removed from favorites'}
                </FavoriteModal>
            )}
        </>
    )
}

export default FavoriteButton
