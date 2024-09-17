import Image from 'next/image'

import NavIcon from '../../assets/icons/nav.png'

import styles from './MobileNavigation.module.css'

const MobileNavigation = () => {
    return (
        <button className={styles.burger}>
            <Image src={NavIcon} alt="" />
        </button>
    )
}

export default MobileNavigation
