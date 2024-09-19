import ComputerIcon from '../assets/icons/computer.svg'
import LaptopIcon from '../assets/icons/laptop.svg'
import AccessoriesIcon from '../assets/icons/mouse.svg'
import HardwareIcon from '../assets/icons/hardware.svg'
import GamingIcon from '../assets/icons/gaming.svg'
import StreamingIcon from '../assets/icons/streaming.svg'
import SmartphoneIcon from '../assets/icons/smartphone.svg'
import SmartwatchIcon from '../assets/icons/smartwatch.svg'

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
