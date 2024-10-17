import Image from 'next/image'

import XCircle from '../../../assets/icons/xcircle.png'

import styles from './InputError.module.css'

type ComponentType = {
    children: React.ReactNode
}

const InputError = ({ children }: ComponentType) => {
    return (
        <div className={styles.errorBox}>
            <Image src={XCircle} alt="" />
            <p>{children}</p>
        </div>
    )
}

export default InputError
