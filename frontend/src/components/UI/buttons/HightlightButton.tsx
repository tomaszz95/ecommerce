import Link from 'next/link'

import styles from './HightlightButton.module.css'

type ComponentType = {
    href: string
    children: React.ReactNode
    type?: string
}

const HightlightButton = ({ href, children, type = 'button' }: ComponentType) => {
    return (
        <Link className={styles.button} href={href} type={type} aria-label={`Go to ${href} page`}>
            {children}
        </Link>
    )
}

export default HightlightButton
