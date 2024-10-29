import { productType } from '../types/types'

import DummyImage from '../assets/photos/dummyimg.webp'
import SomeImg from '../assets/photos/gaminghero.jpg'

const dummyProducts: productType[] = [
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, SomeImg, DummyImage, SomeImg, DummyImage, DummyImage],
        category: {
            name: 'Smartphones',
            link: '/shop/smartphones',
        },
        company: 'Apple',
        prodId: '1',
        promotion: {
            isPromotion: true,
            promotionPercent: 35,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [SomeImg, DummyImage, SomeImg, DummyImage],
        category: {
            name: 'Computers',
            link: '/shop/computers',
        },
        company: 'Lenovo',
        prodId: '12',
        promotion: {
            isPromotion: true,
            promotionPercent: 35,
        },
        recommended: true,
        stock: 11,
    },
    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [SomeImg, SomeImg, DummyImage, SomeImg, DummyImage, SomeImg],
        category: {
            name: 'Laptops',
            link: '/shop/laptops',
        },
        company: 'Apple',
        prodId: '123',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 0,
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
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatches',
            link: '/shop/smartwatches',
        },
        company: 'Apple',
        prodId: '121323132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '11551',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphones',
            link: '/shop/smartphones',
        },
        company: 'Apple',
        prodId: '12323',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computers',
            link: '/shop/computers',
        },
        company: 'Apple',
        prodId: '18872',
        promotion: {
            isPromotion: true,
            promotionPercent: 20,
        },
        recommended: false,
        stock: 0,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptops',
            link: '/shop/laptops',
        },
        company: 'Apple',
        prodId: '1267763',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
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
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatches',
            link: '/shop/smartwatches',
        },
        company: 'Apple',
        prodId: '12134423132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '1152351',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphones',
            link: '/shop/smartphones',
        },
        company: 'Apple',
        prodId: '1571',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computers',
            link: '/shop/computers',
        },
        company: 'Apple',
        prodId: '1522',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
        stock: 32,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptops',
            link: '/shop/laptops',
        },
        company: 'Apple',
        prodId: '125332533',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
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
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatches',
            link: '/shop/smartwatches',
        },
        company: 'Apple',
        prodId: '1213233223132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '115509901',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphones',
            link: '/shop/smartphones',
        },
        company: 'Apple',
        prodId: '10909',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computers',
            link: '/shop/computers',
        },
        company: 'Lenovo',
        prodId: '12900909',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
        stock: 32,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptops',
            link: '/shop/laptops',
        },
        company: 'Apple',
        prodId: '129090903',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
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
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatches',
            link: '/shop/smartwatches',
        },
        company: 'Apple',
        prodId: '12198789323132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '1198789551',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphones',
            link: '/shop/smartphones',
        },
        company: 'Apple',
        prodId: '18978989',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computers',
            link: '/shop/computers',
        },
        company: 'Lenovo',
        prodId: '17899872',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
        stock: 32,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptops',
            link: '/shop/laptops',
        },
        company: 'Apple',
        prodId: '128987983',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
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
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatches',
            link: '/shop/smartwatches',
        },
        company: 'Apple',
        prodId: '121378989723132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '11879798551',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 16',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda.',
        price: 699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartphones',
            link: '/shop/smartphones',
        },
        company: 'Apple',
        prodId: '198879987897',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: true,
        stock: 32,
    },
    {
        name: 'Apple Iphone 15',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda. Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 6991,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Computers',
            link: '/shop/computers',
        },
        company: 'Lenovo',
        prodId: '1989879872',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: false,
        stock: 32,
    },

    {
        name: 'Apple Iphone 14',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 99,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Laptops',
            link: '/shop/laptops',
        },
        company: 'Apple',
        prodId: '17456523',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
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
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 11',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Smartwatches',
            link: '/shop/smartwatches',
        },
        company: 'Apple',
        prodId: '121456654323132',
        promotion: {
            isPromotion: true,
            promotionPercent: 30,
        },
        recommended: false,
        stock: 32,
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
        stock: 32,
    },
    {
        name: 'Apple Iphone 18',
        description:
            'Lorem ipsum dolor sit amened. Asad asd asd asd dsdsdasd asd sdasda sda asd dsaas asd asd asdasddsa sad sa asdsad sadsadsad sdasadsda',
        price: 1699,
        images: [DummyImage, DummyImage, DummyImage, DummyImage],
        category: {
            name: 'Hardware',
            link: '/shop/hardware',
        },
        company: 'Apple',
        prodId: '11554665451',
        promotion: {
            isPromotion: false,
            promotionPercent: 0,
        },
        recommended: true,
        stock: 32,
    },
]

export default dummyProducts
