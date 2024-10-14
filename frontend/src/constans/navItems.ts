import ComputerIcon from '../assets/icons/computer.svg'
import LaptopIcon from '../assets/icons/laptop.svg'
import AccessoriesIcon from '../assets/icons/mouse.svg'
import HardwareIcon from '../assets/icons/hardware.svg'
import GamingIcon from '../assets/icons/gaming.svg'
import StreamingIcon from '../assets/icons/streaming.svg'
import SmartphoneIcon from '../assets/icons/smartphone.svg'
import SmartwatchIcon from '../assets/icons/smartwatch.svg'

import ComputerHero from '../assets/photos/computerHero.jpg'
import LaptopHero from '../assets/photos/laptopHero.jpg'
import AccessoriesHero from '../assets/photos/accessoriesHero.jpg'
import HardwareHero from '../assets/photos/hardwareHero.jpg'
import GamingHero from '../assets/photos/gamingHero.jpg'
import StreamingHero from '../assets/photos/streamingHero.jpg'
import SmartphoneHero from '../assets/photos/smartphoneHero.jpg'
import SmartwatchHero from '../assets/photos/smartwatchHero.jpg'

type navItemsType = { name: string; link: string; icon: any; photo: any }[]

const navItems: navItemsType = [
    {
        name: 'Computers',
        link: '/shop/computers',
        icon: ComputerIcon,
        photo: ComputerHero,
    },
    {
        name: 'Laptops',
        link: '/shop/laptops',
        icon: LaptopIcon,
        photo: LaptopHero,
    },
    {
        name: 'Accessories',
        link: '/shop/accessories',
        icon: AccessoriesIcon,
        photo: AccessoriesHero,
    },
    {
        name: 'PC hardware',
        link: '/shop/hardware',
        icon: HardwareIcon,
        photo: HardwareHero,
    },
    {
        name: 'Gaming',
        link: '/shop/gaming',
        icon: GamingIcon,
        photo: GamingHero,
    },
    {
        name: 'Streaming',
        link: '/shop/streaming',
        icon: StreamingIcon,
        photo: StreamingHero,
    },
    {
        name: 'Smartphones',
        link: '/shop/smartphones',
        icon: SmartphoneIcon,
        photo: SmartphoneHero,
    },
    {
        name: 'Smartwatches',
        link: '/shop/smartwatches',
        icon: SmartwatchIcon,
        photo: SmartwatchHero,
    },
]

export default navItems
