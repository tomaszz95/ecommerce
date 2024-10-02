import HeroImage from '../components/heroImage/HeroImage'
import ProductsContainer from '../components/product/ProductsContainer'
import Recommended from '../components/homepage/recommendedSection/Recommended'
import OfferSection from '../components/homepage/offerSection/OfferSection'
import BrandsSection from '../components/homepage/brandsSection/BrandsSection'

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
            <ProductsContainer>
                <Recommended />
            </ProductsContainer>
            <HeroImage
                h1Header="false"
                imgType="encourage"
                bigText="Buy the perfect computer for your needs"
                smallText="Choose manufacturer, components and price in a few second."
                link="/shop/computer"
                linkText="Choose now!"
            />
            <OfferSection />
            <BrandsSection />
        </>
    )
}

export default Homepage
