import DummyImage from '../assets/photos/dummyimg.webp'
import SomeImg from '../assets/photos/gaminghero.jpg'

const orderDummy = {
    orderId: '213',
    totalPrice: 21323,
    status: 'pending',
    products: [
        {
            product: {
                name: 'Apple Iphone 16',
                price: 699,
                image: DummyImage,
                category: {
                    name: 'Smartphones',
                    link: '/shop/smartphones',
                },
                prodId: '1',
                promotion: {
                    isPromotion: true,
                    promotionPercent: 35,
                },
                stock: 32,
            },
            count: 3,
            totalProductPrice: 1252,
        },
        {
            product: {
                name: 'Apple Iphone 15',
                price: 6399,
                image: SomeImg,
                category: {
                    name: 'Smartphones',
                    link: '/shop/smartphones',
                },
                prodId: '13',
                promotion: {
                    isPromotion: true,
                    promotionPercent: 35,
                },
                stock: 12,
            },
            count: 2,
            totalProductPrice: 12532,
        },
        {
            product: {
                name: 'Apple Iphone 14',
                price: 99,
                image: SomeImg,
                category: {
                    name: 'Laptops',
                    link: '/shop/laptops',
                },
                prodId: '123',
                promotion: {
                    isPromotion: false,
                    promotionPercent: 0,
                },
                stock: 3,
            },
            count: 1,
            totalProductPrice: 99,
        },
    ],
}

export default orderDummy