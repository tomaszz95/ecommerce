import HeroImage from '../components/homepage/heroImage/HeroImage'
import ProductsContainer from '..//components/UI/ProductsContainer'
import Recommended from '../components/homepage/recommended/Recommended'

const Homepage = () => {
    return (
        <>
            <HeroImage />
            <ProductsContainer>
                <Recommended />
            </ProductsContainer>
            <div style={{ height: '100vh', backgroundColor: 'lightblue', padding: '20px' }} />
        </>
    )
}

export default Homepage
