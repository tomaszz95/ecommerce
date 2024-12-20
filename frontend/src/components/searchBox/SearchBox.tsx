'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import SearchIcon from '../../assets/icons/search.svg'

import styles from './SearchBox.module.css'

const SearchBox = () => {
    const [inputSearchValue, setInputSearchValue] = useState<string>('')
    const pathname = usePathname()
    const router = useRouter()

    if (pathname === '/contact') {
        return null
    }

    const inputHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputSearchValue.trim() !== '') {
            router.push(`/shop?search=${inputSearchValue}`)
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
