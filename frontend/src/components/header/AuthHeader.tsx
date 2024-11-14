import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../assets/photos/nextpc.png'

import styles from './AuthHeader.module.css'

const AuthHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerBox}>
                <Link href="/" className={styles.logoLink} aria-label="Go to homepge">
                    <Image src={Logo} alt="NeXtPC logo" className={styles.logo} priority />
                </Link>
            </div>
        </div>
    )
}

export default AuthHeader
