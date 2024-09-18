'use client'

import Image from 'next/image'
import { useState } from 'react'

import NavIcon from '../../../assets/icons/nav.png'

import styles from './MobileNavigation.module.css'
import MobileNavModal from './mobileNavModal/MobileNavModal'
import MobileNavPortal from './mobileNavModal/MobileNavPortal'

const MobileNavigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const openModal = () => setIsNavOpen(true)
    const closeModal = () => setIsNavOpen(false)

    return (
        <>
            <button className={styles.burger} aria-label="Click to open navigation" onClick={openModal}>
                <Image src={NavIcon} alt="" />
            </button>
            {isNavOpen && (
                <MobileNavPortal>
                    <MobileNavModal onClose={closeModal} />
                </MobileNavPortal>
            )}
        </>
    )
}

export default MobileNavigation
