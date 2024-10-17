import { topBarItemType } from './../types/types'

import BriefcaseIcon from '../assets/icons/briefcase.svg'
import StarIcon from '../assets/icons/star.svg'
import PackageIcon from '../assets/icons/package.svg'
import ShopIcon from '../assets/icons/shop.svg'

const topBarItems: topBarItemType[] = [
    {
        icon: BriefcaseIcon,
        text: '10 years in business',
    },
    {
        icon: StarIcon,
        text: 'Highest customer ratings',
    },
    {
        icon: PackageIcon,
        text: 'Express order shipping',
    },
    {
        icon: ShopIcon,
        text: 'Free delivery to 20 stores',
    },
]

export default topBarItems
