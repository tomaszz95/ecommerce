import AcerLogo from '../assets/brand/acerLogo.svg'
import AsusLogo from '../assets/brand/appleLogo.svg'
import AppleLogo from '../assets/brand/asusLogo.svg'
import IntelLogo from '../assets/brand/intelLogo.svg'
import LenovoLogo from '../assets/brand/lenovoLogo.svg'
import LogitechLogo from '../assets/brand/logitechLogo.svg'
import MicrosoftLogo from '../assets/brand/microsoftLogo.svg'
import SamsungLogo from '../assets/brand/samsungLogo.svg'
import SonyLogo from '../assets/brand/sonyLogo.svg'
import XiaomiLogo from '../assets/brand/xiaomiLogo.svg'
import DJILogo from '../assets/brand/djiLogo.svg'
import HPLogo from '../assets/brand/hpLogo.svg'

type brandLogosType = { brand: string; logo: any }[]

const brandLogos: brandLogosType = [
    { brand: 'acer', logo: AcerLogo },
    { brand: 'apple', logo: AsusLogo },
    { brand: 'asus', logo: AppleLogo },
    { brand: 'intel', logo: IntelLogo },
    { brand: 'lenovo', logo: LenovoLogo },
    { brand: 'logitech', logo: LogitechLogo },
    { brand: 'microsoft', logo: MicrosoftLogo },
    { brand: 'samsung', logo: SamsungLogo },
    { brand: 'sony', logo: SonyLogo },
    { brand: 'xiaomi', logo: XiaomiLogo },
    { brand: 'dji', logo: DJILogo },
    { brand: 'hp', logo: HPLogo },
]

export default brandLogos
