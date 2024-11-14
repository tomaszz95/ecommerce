import type { Metadata } from 'next'

import MainLayout from '../../components/layouts/MainLayout'
import HelpCenter from '../../components/contactPage/helpCenter/HelpCenter'
import ContactBox from '../../components/contactPage/contactBox/ContactBox'

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
