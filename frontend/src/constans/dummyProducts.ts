import { StaticImageData } from 'next/image'

import DummyImage from '../assets/photos/dummyImg.webp'

export type dummyProductsType = {
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
}

const dummyProducts: dummyProductsType[] = [
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphone',
            link: '/shop/smartphone',
        },
        company: 'Apple',
        prodId: '1',
        promotion: {
            isPromotion: true,
            promotionPercent: 35,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computer',
            link: '/shop/computer',
        },
        company: 'Lenovo',
        prodId: '12',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptop',
            link: '/shop/laptop',
        },
        company: 'Apple',
        prodId: '123',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 13',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 649,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Gaming',
            link: '/shop/gaming',
        },
        company: 'Xiaomi',
        prodId: '1323',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 12',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 299,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Streaming',
            link: '/shop/streaming',
        },
        company: 'Apple',
        prodId: '12332',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatch',
            link: '/shop/smartwatch',
        },
        company: 'Apple',
        prodId: '121323132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 7',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Accessories',
            link: '/shop/accessories',
        },
        company: 'Apple',
        prodId: '12133122332',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'PC hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '11551',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphone',
            link: '/shop/smartphone',
        },
        company: 'Apple',
        prodId: '12323',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computer',
            link: '/shop/computer',
        },
        company: 'Lenovo',
        prodId: '18872',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptop',
            link: '/shop/laptop',
        },
        company: 'Apple',
        prodId: '1267763',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 13',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 649,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Gaming',
            link: '/shop/gaming',
        },
        company: 'Xiaomi',
        prodId: '1326763',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 12',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 299,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Streaming',
            link: '/shop/streaming',
        },
        company: 'Apple',
        prodId: '1235466532',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatch',
            link: '/shop/smartwatch',
        },
        company: 'Apple',
        prodId: '12134423132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 7',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Accessories',
            link: '/shop/accessories',
        },
        company: 'Apple',
        prodId: '1213316622332',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'PC hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '1152351',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphone',
            link: '/shop/smartphone',
        },
        company: 'Apple',
        prodId: '1571',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computer',
            link: '/shop/computer',
        },
        company: 'Lenovo',
        prodId: '1522',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptop',
            link: '/shop/laptop',
        },
        company: 'Apple',
        prodId: '125332533',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 13',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 649,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Gaming',
            link: '/shop/gaming',
        },
        company: 'Xiaomi',
        prodId: '1325353',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 12',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 299,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Streaming',
            link: '/shop/streaming',
        },
        company: 'Apple',
        prodId: '123553232',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatch',
            link: '/shop/smartwatch',
        },
        company: 'Apple',
        prodId: '1213233223132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 7',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Accessories',
            link: '/shop/accessories',
        },
        company: 'Apple',
        prodId: '121339889122332',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'PC hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '115509901',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphone',
            link: '/shop/smartphone',
        },
        company: 'Apple',
        prodId: '10909',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computer',
            link: '/shop/computer',
        },
        company: 'Lenovo',
        prodId: '12900909',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptop',
            link: '/shop/laptop',
        },
        company: 'Apple',
        prodId: '129090903',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 13',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 649,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Gaming',
            link: '/shop/gaming',
        },
        company: 'Xiaomi',
        prodId: '1390099023',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 12',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 299,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Streaming',
            link: '/shop/streaming',
        },
        company: 'Apple',
        prodId: '1238989732',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatch',
            link: '/shop/smartwatch',
        },
        company: 'Apple',
        prodId: '12198789323132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 7',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Accessories',
            link: '/shop/accessories',
        },
        company: 'Apple',
        prodId: '12133789798122332',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'PC hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '1198789551',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphone',
            link: '/shop/smartphone',
        },
        company: 'Apple',
        prodId: '18978989',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computer',
            link: '/shop/computer',
        },
        company: 'Lenovo',
        prodId: '17899872',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptop',
            link: '/shop/laptop',
        },
        company: 'Apple',
        prodId: '128987983',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 13',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 649,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Gaming',
            link: '/shop/gaming',
        },
        company: 'Xiaomi',
        prodId: '138989723',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 12',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 299,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Streaming',
            link: '/shop/streaming',
        },
        company: 'Apple',
        prodId: '12387998732',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatch',
            link: '/shop/smartwatch',
        },
        company: 'Apple',
        prodId: '121378989723132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 7',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Accessories',
            link: '/shop/accessories',
        },
        company: 'Apple',
        prodId: '12138798973122332',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'PC hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '11879798551',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphone',
            link: '/shop/smartphone',
        },
        company: 'Apple',
        prodId: '198879987897',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computer',
            link: '/shop/computer',
        },
        company: 'Lenovo',
        prodId: '1989879872',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptop',
            link: '/shop/laptop',
        },
        company: 'Apple',
        prodId: '17456523',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 13',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 649,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Gaming',
            link: '/shop/gaming',
        },
        company: 'Xiaomi',
        prodId: '1354665423',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 12',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 299,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Streaming',
            link: '/shop/streaming',
        },
        company: 'Apple',
        prodId: '12356532',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatch',
            link: '/shop/smartwatch',
        },
        company: 'Apple',
        prodId: '121456654323132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
    },
    {
        name: 'Apple Iphone 7',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Accessories',
            link: '/shop/accessories',
        },
        company: 'Apple',
        prodId: '1213356654122332',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'PC hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '11554665451',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
    },
]

export default dummyProducts
