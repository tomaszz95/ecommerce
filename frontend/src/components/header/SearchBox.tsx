'use client'

import Image from 'next/image'
import { useState } from 'react'

import Search from '../../assets/icons/search.png'

import styles from './SearchBox.module.css'

const SearchBox = () => {
    const [inputSearchValue, setInputSearchValue] = useState<string>('')

    const inputHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Input value:', inputSearchValue)
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
                <Image src={Search} alt="Search icon" />
            </button>
        </form>
    )
}

export default SearchBox
