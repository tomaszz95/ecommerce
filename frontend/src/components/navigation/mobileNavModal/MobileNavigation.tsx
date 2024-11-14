'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import MobileNavModal from './MobileNavModal'
import MobileNavPortal from './MobileNavPortal'

import NavIcon from '../../../assets/icons/nav.svg'

import styles from './MobileNavigation.module.css'

const MobileNavigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const pathname = usePathname()

    if (pathname === '/contact') {
        return null
    }
    
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
