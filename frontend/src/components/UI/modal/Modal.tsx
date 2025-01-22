'use client'

import React from 'react'

import styles from './Modal.module.css'

type ModalProps = {
    children: React.ReactNode
    isVisible: boolean
    onAnimationEnd?: () => void
}

const Modal = ({ children, isVisible, onAnimationEnd }: ModalProps) => {
    return (
        <div
            className={`${styles.modal} ${isVisible ? styles.slideIn : styles.slideOut}`}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </div>
    )
}

export default Modal
