import { StaticImageData } from 'next/image'

// products

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

// logos

export type brandLogoType = { brand: string; logo: StaticImageData }

// navigation / header

export type navItemType = { name: string; link: string; icon: StaticImageData; photo: StaticImageData }

export type headerOptionItemType = { icon: StaticImageData; text: string; href: string }

export type topBarItemType = { text: string; icon: StaticImageData }

// login

export type loginOfferItemType = { icon: StaticImageData; text: string }

// contact

export type questionsType = {
    question: string
    answer: string
}

export type helpCenterItemType = {
    icon: StaticImageData
    text: string
    questions: questionsType[]
}
