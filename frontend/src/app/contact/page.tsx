import type { Metadata } from 'next'

import MainLayout from '../../components/layouts/MainLayout'
import HelpCenter from '../../components/contact/helpCenter/HelpCenter'
import ContactBox from '@/components/contact/ContactBox'

export const metadata: Metadata = {
    title: 'NeXtPC - Contact',
    description: 'neXtPC app homepage',
}

const ContactPage = () => {
    return (
        <MainLayout>
            <HelpCenter />
            <ContactBox />
        </MainLayout>
    )
}

export default ContactPage
