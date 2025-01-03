import Image from 'next/image'

import { useState } from 'react'

import OrderCartInfo from './OrderCartInfo'
import OrderCartPrice from './OrderCartPrice'
import Modal from '../../../../components/UI/modal/Modal'
import OrderModal from '../orderModal/OrderModal'

import TrashIcon from '../../../../assets/icons/trash.svg'

import { cartSingleProductData } from '../../../../types/types'

import { API_URL } from '../../../../constans/url'

import styles from './OrderCartItem.module.css'

type ComponentType = {
    product: cartSingleProductData
    isLast: boolean
    orderId: string
}

const OrderCartItem = ({ product, isLast, orderId }: ComponentType) => {
    const [openModal, setOpenModal] = useState(false)
    const [serverError, setServerError] = useState(false)

    const openModalHandler = () => {
        setOpenModal(true)
    }

    const closeModalHandler = () => {
        setOpenModal(false)
        setServerError(false)
    }

    const deleteSingleProductFromCart = async () => {
        try {
            const response = await fetch(`${API_URL}/api/orders/deleteSingleProduct`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderId: orderId,
                    productId: product.product,
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
        <div className={`${styles.orderItem} ${isLast ? styles.lastItem : ''}`}>
            <button className={styles.orderItemTrash} onClick={openModalHandler} aria-label="Remove item from cart">
                <Image src={TrashIcon} alt="" />
            </button>
            <OrderCartInfo
                name={product.name}
                image={product.image}
                amount={product.amount}
                orderId={orderId}
                productId={product.product}
            />
            <OrderCartPrice
                totalProductPrice={product.totalProductPrice}
                price={product.price}
                promotionPrice={product.promotionPrice}
                isLast={isLast}
            />
            {openModal && (
                <OrderModal
                    onClose={closeModalHandler}
                    heading="Are you sure you want delete this product?"
                    text="You can add this anytime"
                    onClick={deleteSingleProductFromCart}
                    buttonText="Delete product"
                />
            )}
            {serverError && <Modal isVisible={serverError}>Something went wrong. Please try again later.</Modal>}
        </div>
    )
}

export default OrderCartItem
