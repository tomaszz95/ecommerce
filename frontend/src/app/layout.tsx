import type { Metadata } from 'next'

import '../styles/globals.css'

type ComponentType = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'NeXtPC - Computer Shop',
    description: 'NeXtPC main site homepage',
}

const RootLayout = ({ children }: ComponentType) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
