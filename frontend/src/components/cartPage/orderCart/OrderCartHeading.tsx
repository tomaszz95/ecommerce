import Image from 'next/image'

import { useState } from 'react'

import OrderModal from './orderModal/OrderModal'
import Modal from '../../../components/UI/modal/Modal'

import TrashIcon from '../../../assets/icons/trash.svg'

import { API_URL } from '../../../constans/url'

import styles from './OrderCartHeading.module.css'

type ComponentType = {
    productsCount: number
    orderId: string
}

const OrderCartHeading = ({ productsCount, orderId }: ComponentType) => {
    const [openModal, setOpenModal] = useState(false)
    const [serverError, setServerError] = useState(false)

    const openModalHandler = () => {
        setOpenModal(true)
    }

    const closeModalHandler = () => {
        setOpenModal(false)
        setServerError(false)
    }

    const deleteAllProductsFromCart = async () => {
        try {
            const response = await fetch(`${API_URL}/api/orders/deleteCart`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderId: orderId,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()
                setServerError(true)
                throw new Error(errorData.msg || 'Something went wrong, please try again later.')
            } else {
                setServerError(false)
                window.location.reload()
            }
        } catch (err) {
            setServerError(true)
        }
    }

    return (
        <div className={styles.orderHeading}>
            <div className={styles.orderTitle}>
                <h1>Cart</h1>
                <span>
                    ({productsCount} {productsCount === 1 ? 'product' : 'products'})
                </span>
            </div>
            <button className={styles.orderClearBtn} onClick={openModalHandler} aria-label="Clear cart">
                <Image src={TrashIcon} alt="" />
                <span>Clear cart</span>
            </button>
            {openModal && (
                <OrderModal
                    onClose={closeModalHandler}
                    heading="Are you sure you want delete all products?"
                    text="This change cannot be undone"
                    onClick={deleteAllProductsFromCart}
                    buttonText="Clear cart"
                />
            )}
            {serverError && <Modal isVisible={serverError}>Something went wrong. Please try again later.</Modal>}
        </div>
    )
}

export default OrderCartHeading
