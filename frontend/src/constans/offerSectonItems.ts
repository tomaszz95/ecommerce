import ComputerHero from '../assets/photos/computerHero.jpg'
import LaptopHero from '../assets/photos/laptopHero.jpg'
import AccessoriesHero from '../assets/photos/accessoriesHero.jpg'
import HardwareHero from '../assets/photos/hardwareHero.jpg'
import GamingHero from '../assets/photos/gamingHero.jpg'
import StreamingHero from '../assets/photos/streamingHero.jpg'
import SmartphoneHero from '../assets/photos/smartphoneHero.jpg'
import SmartwatchHero from '../assets/photos/smartwatchHero.jpg'

type offerSectonItemsType = {
    name: string
    photo: any
    subcategories: { name: string; link: string }[]
}[]

const offerSectonItems: offerSectonItemsType = [
    {
        name: 'Computers',
        photo: ComputerHero,
        subcategories: [
            { name: 'Home', link: '/computers/home' },
            { name: 'Office', link: '/computers/office' },
            { name: 'All In One', link: '/computers/all-in-one' },
            { name: 'Servers', link: '/computers/servers' },
        ],
    },
    {
        name: 'Laptops',
        photo: LaptopHero,
        subcategories: [
            { name: 'Home', link: '/laptops/home' },
            { name: 'Business', link: '/laptops/business' },
            { name: 'Touchscreen', link: '/laptops/touchscreen' },
            { name: 'MacBooks', link: '/laptops/macbooks' },
        ],
    },
    {
        name: 'Accessories',
        photo: AccessoriesHero,
        subcategories: [
            { name: 'Computer', link: '/accessories/computer' },
            { name: 'Smart', link: '/accessories/smart' },
            { name: 'Printers', link: '/accessories/printers' },
            { name: 'Cables', link: '/accessories/cables' },
        ],
    },
    {
        name: 'PC hardware',
        photo: HardwareHero,
        subcategories: [
            { name: 'Graphics cards', link: '/accessories/graphisc-cards' },
            { name: 'Hard drives', link: '/accessories/hard-drives' },
            { name: 'Processors', link: '/accessories/processors' },
            { name: 'RAM memory', link: '/accessories/ram-memory' },
        ],
    },
    {
        name: 'Gaming',
        photo: GamingHero,
        subcategories: [
            { name: 'Computers', link: '/gaming/computers' },
            { name: 'Laptops', link: '/gaming/laptops' },
            { name: 'Equipment', link: '/gaming/equipment' },
            { name: 'Controllers', link: '/gaming/controllers' },
        ],
    },
    {
        name: 'Streaming',
        photo: StreamingHero,
        subcategories: [
            { name: 'Audio', link: '/streaming/audio' },
            { name: 'Video', link: '/streaming/video' },
            { name: 'Equipment', link: '/streaming/equipment' },
            { name: 'Desks', link: '/streaming/desks' },
        ],
    },
    {
        name: 'Smartphones',
        photo: SmartphoneHero,
        subcategories: [
            { name: 'Using AI', link: '/smartphones/ai' },
            { name: 'Inductive', link: '/smartphones/inductive' },
            { name: 'Waterproof', link: '/smartphones/waterproof' },
            { name: 'Protection', link: '/smartphones/protection' },
        ],
    },
    {
        name: 'Smartwatches',
        photo: SmartwatchHero,
        subcategories: [
            { name: 'Sport', link: '/smartwatches/sport' },
            { name: 'Smartbands', link: '/smartwatches/smartbands' },
            { name: 'For kids', link: '/smartwatches/kids' },
            { name: 'Pulse oximeter', link: '/smartwatches/pulse' },
        ],
    },
]

export default offerSectonItems
