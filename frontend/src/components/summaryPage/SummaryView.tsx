'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import SummaryData from './summaryData/SummaryData'
import OrderSummary from '../orderSummary/OrderSummary'
import SummaryComment from './summaryData/SummaryComment'
import Modal from '../UI/modal/Modal'

import { API_URL, FRONTEND_URL } from '../../constans/url'

import { singleOrderType } from '../../types/types'

import styles from './SummaryView.module.css'

type ComponentType = {
    order: singleOrderType
}

const SummaryView = ({ order }: ComponentType) => {
    const router = useRouter()
    const [comment, setComment] = useState('')
    const [serverError, setServerError] = useState('')

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${API_URL}/api/orders/summary/${order._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: comment,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                setServerError(errorData.msg)
                return
            }

            router.push(`${FRONTEND_URL}/order/confirmation/${order._id}`)
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

            setServerError(errorMessage)
        }
    }

    return (
        <div className={styles.summaryPage}>
            <div className={styles.summaryContainer}>
                <SummaryData order={order} />
                <section className={`${styles.sectionComment} ${styles.section}`}>
                    <SummaryComment comment={comment} onSetComment={setComment} />
                </section>
            </div>

            <OrderSummary isFormValid={true} order={order} onHandleSubmit={handleSubmit} linkText="Buy and pay" />

            {serverError !== '' && (
                <Modal isVisible={serverError !== ''} onAnimationEnd={() => setServerError('')}>
                    {serverError}
                </Modal>
            )}
        </div>
    )
}

export default SummaryView
