import { navItemType } from './../types/types'

import ComputersIcon from '../assets/icons/computer.svg'
import LaptopsIcon from '../assets/icons/laptop.svg'
import AccessoriesIcon from '../assets/icons/mouse.svg'
import HardwareIcon from '../assets/icons/hardware.svg'
import GamingIcon from '../assets/icons/gaming.svg'
import StreamingIcon from '../assets/icons/streaming.svg'
import SmartphonesIcon from '../assets/icons/smartphone.svg'
import SmartwatchesIcon from '../assets/icons/smartwatch.svg'

import ComputersHero from '../../public/photos/computerhero.jpg'
import LaptopsHero from '../../public/photos/laptophero.jpg'
import AccessoriesHero from '../../public/photos/accessorieshero.jpg'
import HardwareHero from '../../public/photos/hardwarehero.jpg'
import GamingHero from '../../public/photos/gaminghero.jpg'
import StreamingHero from '../../public/photos/streaminghero.jpg'
import SmartphonesHero from '../../public/photos/smartphonehero.jpg'
import SmartwatchesHero from '../../public/photos/smartwatchhero.jpg'

const navItems: navItemType[] = [
    {
        name: 'Computers',
        link: '/shop/computers',
        icon: ComputersIcon,
        photo: ComputersHero,
    },
    {
        name: 'Laptops',
        link: '/shop/laptops',
        icon: LaptopsIcon,
        photo: LaptopsHero,
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
        name: 'Smartphones',
        link: '/shop/smartphones',
        icon: SmartphonesIcon,
        photo: SmartphonesHero,
    },
    {
        name: 'Smartwatches',
        link: '/shop/smartwatches',
        icon: SmartwatchesIcon,
        photo: SmartwatchesHero,
    },
]

export default navItems
