import Link from 'next/link'

import styles from './HightlightButton.module.css'

type ComponentType = {
    href: string
    children: React.ReactNode
    className?: string
    type?: string
}

const HightlightButton = ({ href, children, className, type = 'button' }: ComponentType) => {
    return (
        <Link className={`${styles.button} ${className === 'hero' ? styles.hero : ''}`} href={href} type={type}>
            {children}
        </Link>
    )
}

export default HightlightButton
