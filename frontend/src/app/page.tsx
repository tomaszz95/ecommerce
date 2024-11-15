import MainLayout from '../components/layouts/MainLayout'

import HeroImage from '../components/heroImage/HeroImage'
import RecommendedSection from '../components/homepage/recommendedSection/RecommendedSection'
import HighlightedSection from '../components/homepage/highlightedSection/HighlightedSection'
import OfferSection from '../components/homepage/offerSection/OfferSection'
import NewsletterSection from '../components/homepage/newsletterSection/NewsletterSection'
import BrandsSection from '../components/homepage/brandsSection/BrandsSection'
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner'

const Homepage = () => {
    return (
        <MainLayout>
            <HeroImage
                h1Header="true"
                imgType="main"
                bigText="NextPC proven technology supplier"
                smallText="Best price, best equipment, best opportunity."
                link="/shop"
                linkText="Check offer!"
            />
            <RecommendedSection />
            <HeroImage
                h1Header="false"
                imgType="encourage"
                bigText="Buy the perfect computer for your needs"
                smallText="Choose manufacturer, components and price in a few second."
                link="/shop/computers"
                linkText="Choose now!"
            />
            <HighlightedSection />
            <OfferSection />
            <NewsletterSection />
            <BrandsSection />
        </MainLayout>
    )
}

export default Homepage
