import brandLogos from '../constans/brandLogos'

const getBrandLogo = (company: string) => {
    const lowerCaseCompanyName = company.toLowerCase()

    const foundBrand = brandLogos.find((brand) => brand.brand === lowerCaseCompanyName)

    if (foundBrand) {
        return foundBrand.logo
    } else {
        return null
    }
}

export default getBrandLogo
