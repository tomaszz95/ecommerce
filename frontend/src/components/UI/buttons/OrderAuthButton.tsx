import Link from 'next/link'

import styles from './OrderAuthButton.module.css'

type ComponentType = {
    href: string
    children: React.ReactNode
    onClick: () => void
    disabled: boolean
}

const OrderAuthButton = ({ href, children, onClick, disabled }: ComponentType) => {
    return (
        <Link
            className={`${styles.button} ${disabled ? styles.disabled : ''}`}
            href={disabled ? '#' : href}
            aria-label={`Go to ${href} page`}
            onClick={(e) => {
                if (disabled) {
                    e.preventDefault()
                } else {
                    onClick()
                }
            }}
        >
            {children}
        </Link>
    )
}

export default OrderAuthButton
