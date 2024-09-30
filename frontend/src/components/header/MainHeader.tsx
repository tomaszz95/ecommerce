import Image from 'next/image'
import Link from 'next/link'

import MobileNavigation from './navigation/mobileNavModal/MobileNavigation'
import SearchBox from './searchBox/SearchBox'
import HeaderOptions from './headerOption/HeaderOptions'

import Logo from '../../assets/photos/nextpc.png'
import styles from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <div className={styles.mainheader}>
            <div className={styles.container}>
                <div className={styles.logoLinkBox}>
                    <Link href="/" className={styles.logoLink}>
                        <Image src={Logo} alt="NeXtPC logo" className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.mobileNavBox}>
                    <MobileNavigation />
                </div>
                <div className={styles.searchNavBox}>
                    <SearchBox />
                </div>
                <div className={styles.headerOptionsBox}>
                    <HeaderOptions />
                </div>
            </div>
        </div>
    )
}

export default MainHeader
