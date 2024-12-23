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

export type categorySingleProductData = {
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
    recommended: boolean
    company: string
    description: string
    stock: number
    averageRating: number
    numOfReviews: number
}

export type cartSingleProductData = {
    amount: number
    category: string
    image: string
    name: string
    price: number
    product: string
    promotion: {
        isPromotion: boolean
        promotionPercent: number
        promotionPrice: number
    }
    promotionPrice: number
    stock: number
    totalProductPrice: number
}

export type homepageProductsData = {
    recommendedProducts: homepageSingleProductData[]
    latestProducts: homepageSingleProductData[]
    biggestDiscountProduct: homepageSingleProductData
    productsByCategory: { [category: string]: homepageSingleProductData[] }
}

// OPINION

export type singleOpinionType = {
    _id: string
    author: string
    message: string
    rating: number
    product: string
    user: string
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
    priceFrom: number
    priceTo: number
    company: string[]
    available: boolean
    promotion: boolean
}

// ORDER

export type cartOrderType = {
    discount: number
    discountValue: number
    orderItems: cartSingleProductData[]
    subtotal: number
    total: number
    user: string
    _id: string
}

// USER

export type userSettingType = {
    email: string
    name: string
    _id: string
    informations: {
        address: string
        postalCode: string
        city: string
        phone: string
    }
}
