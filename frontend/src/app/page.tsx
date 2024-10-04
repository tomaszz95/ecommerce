import HeroImage from '../components/heroImage/HeroImage'
import Recommended from '../components/homepage/recommendedSection/Recommended'
import HighlightedSection from '../components/homepage/highlightedSection/HighlightedSection'
import OfferSection from '../components/homepage/offerSection/OfferSection'
import BrandsSection from '../components/homepage/brandsSection/BrandsSection'
import NewsletterSection from '../components/homepage/newsletterSection/NewsletterSection'

const Homepage = () => {
    return (
        <>
            <HeroImage
                imgType="main"
                h1Header="true"
                bigText="NextPC proven technology supplier"
                smallText="Best price, best equipment, best opportunity."
                link="/shop"
                linkText="Check offer!"
            />
            <Recommended />
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
        </>
    )
}

export default Homepage
