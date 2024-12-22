'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import SearchIcon from '../../assets/icons/search.svg'

import { FRONTEND_URL } from '../../constans/url'

import styles from './SearchBox.module.css'

const SearchBox = () => {
    const [currentUrl, setCurrentUrl] = useState<URL | null>(null)
    const [inputSearchValue, setInputSearchValue] = useState<string>('')
    const pathname = usePathname()

    if (pathname === '/contact') {
        return null
    }

    useEffect(() => {
        const url = new URL(window.location.href)

        setCurrentUrl(url)
        setInputSearchValue(url.searchParams.get('search') || '')
    }, [])

    const inputHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (currentUrl && inputSearchValue === '') {
            currentUrl.searchParams.delete('search')
        } else if (currentUrl) {
            currentUrl.searchParams.set('search', inputSearchValue)
            currentUrl.searchParams.set('page', '1')
        }

        if (currentUrl) {
            const properUrl = `${FRONTEND_URL}/${currentUrl?.pathname === '/' ? 'shop' : `${currentUrl.pathname}/`}${currentUrl.search}`

            window.location.href = properUrl.toString()
        }
    }

    return (
        <form className={styles.searchBox} onSubmit={inputHandler}>
            <input
                type="text"
                placeholder="Search..."
                aria-label="Type name of the product to find it"
                value={inputSearchValue}
                onChange={(e) => setInputSearchValue(e.target.value)}
            />
            <button aria-label="Click to search" type="submit">
                <Image src={SearchIcon} alt="Search icon" />
            </button>
        </form>
    )
}

export default SearchBox
