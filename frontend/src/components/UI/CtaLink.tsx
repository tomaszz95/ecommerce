import Link from 'next/link'

import styles from './CtaLink.module.css'

type ComponentType = {
    children: React.ReactNode
    href: string
    width: string
}

const CtaLink = ({ children, href, width }: ComponentType) => {
    return (
        <Link className={styles.link} href={href} style={{ width: width }}>
            {children}
        </Link>
    )
}

export default CtaLink
