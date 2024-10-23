import { navItemType } from './../types/types'

import ComputerIcon from '../assets/icons/computer.svg'
import LaptopIcon from '../assets/icons/laptop.svg'
import AccessoriesIcon from '../assets/icons/mouse.svg'
import HardwareIcon from '../assets/icons/hardware.svg'
import GamingIcon from '../assets/icons/gaming.svg'
import StreamingIcon from '../assets/icons/streaming.svg'
import SmartphoneIcon from '../assets/icons/smartphone.svg'
import SmartwatchIcon from '../assets/icons/smartwatch.svg'

import ComputerHero from '../assets/photos/computerhero.jpg'
import LaptopHero from '../assets/photos/laptophero.jpg'
import AccessoriesHero from '../assets/photos/accessorieshero.jpg'
import HardwareHero from '../assets/photos/hardwarehero.jpg'
import GamingHero from '../assets/photos/gaminghero.jpg'
import StreamingHero from '../assets/photos/streaminghero.jpg'
import SmartphoneHero from '../assets/photos/smartphonehero.jpg'
import SmartwatchHero from '../assets/photos/smartwatchhero.jpg'

const navItems: navItemType[] = [
    {
        name: 'Computer',
        link: '/shop/computer',
        icon: ComputerIcon,
        photo: ComputerHero,
    },
    {
        name: 'Laptop',
        link: '/shop/laptop',
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
        name: 'Hardware',
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
        name: 'Smartphone',
        link: '/shop/smartphone',
        icon: SmartphoneIcon,
        photo: SmartphoneHero,
    },
    {
        name: 'Smartwatch',
        link: '/shop/smartwatch',
        icon: SmartwatchIcon,
        photo: SmartwatchHero,
    },
]

export default navItems
