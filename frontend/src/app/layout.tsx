import type { Metadata } from 'next'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import '../styles/globals.css'

type ComponentType = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'neXtPC - computer shop',
    description: 'neXtPC app homepage',
}

const HomepageLayout = ({ children }: ComponentType) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    )
}

export default HomepageLayout
