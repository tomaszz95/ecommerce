import CartIcon from '../assets/icons/cart.svg'
import OrderIcon from '../assets/icons/order.svg'
import StatusIcon from '../assets/icons/status.svg'
import PromotionIcon from '../assets/icons/promotion.svg'

type loginOfferItemsType = { icon: any; text: string }[]

const loginOfferItems: loginOfferItemsType = [
    {
        icon: CartIcon,
        text: 'Order faster',
    },
    {
        icon: OrderIcon,
        text: 'Check previous orders',
    },
    {
        icon: StatusIcon,
        text: 'Track order status',
    },
    {
        icon: PromotionIcon,
        text: 'Take advantage of discounts',
    },
]

export default loginOfferItems
