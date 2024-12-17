'use client'
import { useEffect, useState } from 'react'

import OpinionsStatistics from './opinionsStatistics/OpinionsStatistics'
import OpinionsList from './opinionsContent/OpinionsList'
import OpinionsForm from './opinionsForm/OpinionsForm'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'

import { singleOpinionType } from '../../../types/types'

import { API_URL } from '../../../constans/url'

import styles from './OpinionsSection.module.css'

type ComponentType = {
    productReviews: singleOpinionType[]
    numOfReviews: number
    averageRating: number
    productId: string
}

const OpinionsSection = ({ productReviews, numOfReviews, averageRating, productId }: ComponentType) => {
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        const checkAuth = async () => {
            const authResponse = await fetch(`${API_URL}/api/auth/isLogged`, {
                method: 'GET',
                credentials: 'include',
            })

            const authData = await authResponse.json()

            if (authData.message === 'User') {
                setIsLogin(true)
            } else {
                setIsLogin(false)
            }

            setIsLoading(false)
        }

        checkAuth()
    }, [])

    return (
        <section id="opinions" className={styles.opinionsContainer}>
            <h2>Reviews</h2>
            {isLoading && <LoadingSpinner />}
            {!isLogin && !isLoading && <h3>To add your review you must me logged in!</h3>}
            {isLogin && !isLoading && (
                <div className={`${styles.opinionsSection} ${numOfReviews === 0 ? styles.noOpinions : ''}`}>
                    <div className={styles.leftColumn}>
                        {numOfReviews !== 0 && (
                            <OpinionsStatistics
                                opinions={productReviews}
                                averageRating={averageRating}
                                numOfReviews={numOfReviews}
                            />
                        )}
                        <OpinionsForm opinionsCount={numOfReviews} formMode="new" productId={productId} />
                    </div>
                    {numOfReviews !== 0 && <OpinionsList opinions={productReviews} />}
                </div>
            )}
        </section>
    )
}

export default OpinionsSection
