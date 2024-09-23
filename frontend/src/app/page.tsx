import HeroImage from '../components/homepage/heroImage/HeroImage'
import ProductsContainer from '../components/productsContainer/ProductsContainer'
import Recommended from '../components/homepage/recommended/Recommended'

const Homepage = () => {
    return (
        <>
            <HeroImage
                imgType="main"
                bigText="Fresh new gaming laptop"
                smallText="Best price, best equipment, best opportunity."
                link="/product/1"
                linkText="Check now!"
            />
            <ProductsContainer>
                <Recommended />
            </ProductsContainer>
            <HeroImage
                imgType="encourage"
                bigText="Buy the perfect computer for your needs"
                smallText="Choose manufacturer, components and price in a few second."
                link="/shop/computer"
                linkText="Choose now!"
            />
        </>
    )
}

export default Homepage
