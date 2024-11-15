import type { Metadata } from 'next'

import MainLayout from '../components/layouts/MainLayout'
import NotFoundView from '../components/notFoundPage/NotFoundView'

export const metadata: Metadata = {
    title: 'Not Found Page',
    description: 'Not Found Page',
}

const NotFoundPage = () => {
    return (
        <MainLayout>
            <NotFoundView />
        </MainLayout>
    )
}

export default NotFoundPage
