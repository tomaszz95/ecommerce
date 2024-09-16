import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../assets/photos/nextpc.png'
import HeaderOptions from './HeaderOptions'

import styles from './MainHeader.module.css'
import SearchBox from './SearchBox'

const MainHeader = () => {
    return (
        <div className={styles.mainheader}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <Image src={Logo} alt="NeXtPC logo" className={styles.logo} />
                </Link>
                <SearchBox />
                <HeaderOptions />
            </div>
        </div>
    )
}

export default MainHeader
