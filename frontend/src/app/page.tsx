import HeroImage from '../components/homepage/heroImage/HeroImage'
import ProductsContainer from '../components/productsContainer/ProductsContainer'
import Recommended from '../components/homepage/recommended/Recommended'
import OfferSection from '../components/homepage/offerSection/OfferSection'

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
        </>
    )
}

export default Homepage
