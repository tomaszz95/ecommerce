import { StaticImageData } from 'next/image'

// PRODUCT

export type productType = {
    name: string
    price: number
    description: string
    images: string[]
    category: string
    company: string
    stock: number
    recommended: boolean
    promotion: {
        isPromotion: boolean
        promotionPercent: number
        promotionPrice: number
    }
    _id: string
    specification: { [keys: string]: string }
    presentation: { title: string; text: string; img: string }[]
    averageRating: number
    numOfReviews: number
    uniqueId: string
}

export type homepageSingleProductData = {
    _id: string
    name: string
    price: number
    category: string
    promotion: {
        isPromotion: boolean
        promotionPercent: number
        promotionPrice: number
    }
    uniqueId: string
    image: string
}

export type homepageProductsData = {
    recommendedProducts: homepageSingleProductData[]
    latestProducts: homepageSingleProductData[]
    biggestDiscountProduct: homepageSingleProductData
    productsByCategory: { [category: string]: homepageSingleProductData[] }
}

// OPINION

export type singleOpinionType = {
    opinionId: string
    opinionAuthor: string
    opinionText: string
    opinionValue: number
    likes: number
    dislikes: number
}

export type productOpinionType = {
    productId: string
    opinionsCount: number
    opinionsAverage: number
    opinions: singleOpinionType[]
}

export type productPresentationDummyType = {
    title: string
    text: string
    img: StaticImageData
}

// LOGOS

export type brandLogoType = { brand: string; logo: StaticImageData }

// NAV / HEADER

export type navItemType = { name: string; link: string; icon: StaticImageData; photo: StaticImageData }

export type headerOptionItemType = { icon: StaticImageData; text: string; href: string }

// LOGIN

export type loginOfferItemType = { icon: StaticImageData; text: string }

// CONTACT

export type questionsType = {
    question: string
    answer: string
}

export type helpCenterItemType = {
    icon: StaticImageData
    text: string
    questions: questionsType[]
}

// FILTERS

export type filterTypes = {
    priceFrom: number | null
    priceTo: number | null
    selectedCompanies: string[]
    availableOnly: boolean
    promotionsOnly: boolean
}

// ORDER

export type orderType = {
    orderId: string
    totalPrice: number
    discount: number
    finalTotalPrice: number
    comment: string
    status: string
    delivery: {
        method: string
        methodWay: string
        informations: {
            name: string
            address: string
            postalCode: string
            city: string
            phone: string
            email: string
        }
    }
    payment: string
    products: singleProductType[]
}

export type singleProductType = {
    product: {
        name: string
        price: number
        image: StaticImageData
        category: {
            name: string
            link: string
        }
        prodId: string
        promotion: {
            isPromotion: boolean
            promotionPercent: number
        }
        stock: number
    }
    count: number
    totalProductPrice: number
}

// USER

export type userType = {
    userId: string
    credentials: {
        name: string
        password: string
        email: string
    }
    informations: {
        address: string
        postalCode: string
        city: string
        phone: string
    }
}
