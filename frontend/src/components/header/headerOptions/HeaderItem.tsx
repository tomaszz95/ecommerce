import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import styles from './HeaderItem.module.css'
import ProfileMenu from './ProfileMenu'

type ComponentType = {
    icon: StaticImageData
    text: string
    href: string
}

const isMobileDevice = () => {
    return typeof window !== 'undefined' && /Mobi|Android/i.test(window.navigator.userAgent)
}

const HeaderItem = ({ icon, text, href }: ComponentType) => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

    const openProfileMenuHandler = () => {
        if (!isMobileDevice()) {
            setIsProfileMenuOpen(true)
        }
        return
    }

    const closeProfileMenuHandler = () => {
        if (!isMobileDevice()) {
            setIsProfileMenuOpen(false)
        }
        return
    }

    const switchProfileMenuOpen = () => {
        setIsProfileMenuOpen((prevValue) => !prevValue)
    }

    if (text === 'User') {
        return (
            <div
                className={styles.profileContainer}
                onMouseEnter={openProfileMenuHandler}
                onMouseLeave={closeProfileMenuHandler}
            >
                <button className={styles.headerItem} onClick={switchProfileMenuOpen}>
                    <Image src={icon} alt="" />
                    <p>
                        {text} <span className={isProfileMenuOpen ? styles.rotate : ''}>▼</span>
                    </p>
                </button>
                {isProfileMenuOpen && <ProfileMenu />}
            </div>
        )
    }

    return (
        <Link className={styles.headerItem} href={href}>
            <Image src={icon} alt="" />
            <p>{text}</p>
        </Link>
    )
}

export default HeaderItem
