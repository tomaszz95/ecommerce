import UserIcon from '../assets/icons/user.svg'
import ContactIcon from '../assets/icons/contact.svg'
import CartIcon from '../assets/icons/cart.svg'

type headerOptionItemsType = { icon: any; text: string; href: string }[]

const headerOptionItems: headerOptionItemsType = [
    {
        icon: UserIcon,
        text: 'Login',
        href: '/login',
    },
    {
        icon: ContactIcon,
        text: 'Contact',
        href: '/contact',
    },
    {
        icon: CartIcon,
        text: 'Cart',
        href: '/cart',
    },
]

export default headerOptionItems
