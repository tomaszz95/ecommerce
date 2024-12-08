import MainLayout from '../components/layouts/MainLayout'

import HeroImage from '../components/heroImage/HeroImage'
import RecommendedSection from '../components/homepage/recommendedSection/RecommendedSection'
import HighlightedSection from '../components/homepage/highlightedSection/HighlightedSection'
import OfferSection from '../components/homepage/offerSection/OfferSection'
import NewsletterSection from '../components/homepage/newsletterSection/NewsletterSection'
import BrandsSection from '../components/homepage/brandsSection/BrandsSection'
import ServerError from '../components/serverError/ServerError'

import { API_URL } from '../constans/apiURL'
import { homepageProductsData } from '../types/types'

const Homepage = async () => {
    try {
        const response = await fetch(`${API_URL}/api/products/homepage`)
        const data: homepageProductsData = await response.json()

        const { recommendedProducts, latestProducts, biggestDiscountProduct, productsByCategory } = data

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
                <RecommendedSection recommendedProducts={recommendedProducts} />
                <HeroImage
                    h1Header="false"
                    imgType="encourage"
                    bigText="Buy the perfect computer for your needs"
                    smallText="Choose manufacturer, components and price in a few seconds."
                    link="/shop/computers"
                    linkText="Choose now!"
                />
                <HighlightedSection biggestDiscountProduct={biggestDiscountProduct} latestProducts={latestProducts} />
                {/* <OfferSection productsByCategory={productsByCategory} /> */}
                <NewsletterSection />
                <BrandsSection />
            </MainLayout>
        )
    } catch (err) {
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
                <ServerError />
                <NewsletterSection />
                <BrandsSection />
            </MainLayout>
        )
    }
}

export default Homepage
