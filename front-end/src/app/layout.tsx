import type { Metadata } from 'next'
import '../styles/globals.css'

type HomepageLayoutType = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Ecommerce app',
    description: 'Ecommerce app description',
}

const HomepageLayout = ({ children }: HomepageLayoutType) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default HomepageLayout
