import ComputerIcon from '../assets/icons/computer.png'
import LaptopIcon from '../assets/icons/laptop.png'
import AccessoriesIcon from '../assets/icons/mouse.png'
import HardwareIcon from '../assets/icons/hardware.png'
import GamingIcon from '../assets/icons/gaming.png'
import StreamingIcon from '../assets/icons/streaming.png'
import SmartphoneIcon from '../assets/icons/smartphone.png'
import SmartwatchIcon from '../assets/icons/smartwatch.png'

type mobileNavItemsType = { name: string; link: string; icon: any }[]

const mobileNavItems: mobileNavItemsType = [
    {
        name: 'Computers',
        link: '/computers',
        icon: ComputerIcon,
    },
    {
        name: 'Laptops',
        link: '/laptops',
        icon: LaptopIcon,
    },
    {
        name: 'Accessories',
        link: '/accessories',
        icon: AccessoriesIcon,
    },
    {
        name: 'PC hardware',
        link: '/hardware',
        icon: HardwareIcon,
    },
    {
        name: 'Gaming',
        link: '/gaming',
        icon: GamingIcon,
    },
    {
        name: 'Streaming',
        link: '/streaming',
        icon: StreamingIcon,
    },
    {
        name: 'Smartphones',
        link: '/smartphones',
        icon: SmartphoneIcon,
    },
    {
        name: 'Smartwatches',
        link: '/smartwatches',
        icon: SmartwatchIcon,
    },
]

export default mobileNavItems
