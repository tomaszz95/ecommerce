import type { Metadata } from 'next'

import EntranceModal from '../components/UI/entranceModal/EntranceModal'

import '../styles/globals.css'

type ComponentType = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'NeXtPC - Computer Shop',
    description: 'NeXtPC main site',
    icons: {
        icon: '/favicon.ico',
    },
}

const RootLayout = ({ children }: ComponentType) => {
    return (
        <html lang="en">
            <body>
                <EntranceModal />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
