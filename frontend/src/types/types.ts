import { StaticImageData } from 'next/image'

// Products

export type productType = {
    name: string
    description: string
    price: number
    images: StaticImageData[]
    category: {
        name: string
        link: string
    }
    company: string
    prodId: string
    promotion: {
        isPromotion: boolean
        promotionPercent: number
    }
    recommended: boolean
    stock: number
}

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

// Logos

export type brandLogoType = { brand: string; logo: StaticImageData }

// Navigation / Header

export type navItemType = { name: string; link: string; icon: StaticImageData; photo: StaticImageData }

export type headerOptionItemType = { icon: StaticImageData; text: string; href: string }

export type topBarItemType = { text: string; icon: StaticImageData }

// Login

export type loginOfferItemType = { icon: StaticImageData; text: string }

// Contact

export type questionsType = {
    question: string
    answer: string
}

export type helpCenterItemType = {
    icon: StaticImageData
    text: string
    questions: questionsType[]
}

// Filters

export type filterTypes = {
    priceFrom: number | null
    priceTo: number | null
    selectedCompanies: string[]
    availableOnly: boolean
    promotionsOnly: boolean
}

// Order

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

// User

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
