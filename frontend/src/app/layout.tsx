import type { Metadata } from 'next'

import Header from '../components/header/Header'

import '../styles/globals.css'

type ComponentType = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Ecommerce app',
    description: 'Ecommerce app homepage description',
}

const HomepageLayout = ({ children }: ComponentType) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default HomepageLayout
