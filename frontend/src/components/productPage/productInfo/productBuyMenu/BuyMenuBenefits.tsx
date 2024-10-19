import Image from 'next/image'
import PackageIcon from '../../../../assets/icons/package.svg'
import DeliveryIcon from '../../../../assets/icons/delivery.svg'
import TruckIcon from '../../../../assets/icons/truck.svg'
import ShopIcon from '../../../../assets/icons/shop.svg'

import styles from './BuyMenuBenefits.module.css'

type ComponentType = {
    stock: number
}

const BuyMenuBenefits = ({ stock }: ComponentType) => {
    return (
        <div className={styles.benefitsMenu}>
            <div className={styles.benefitsMenuItem}>
                <Image src={PackageIcon} alt="" />
                <p>
                    <span>{stock === 0 ? 'No' : stock}</span> {stock === 1 ? 'product' : 'products'}{' '}
                    <span>available</span>
                </p>
            </div>
            {stock > 0 ? (
                <div className={styles.benefitsMenuItem}>
                    <Image src={DeliveryIcon} alt="" />
                    <p>
                        Buy <span>now</span> and receive <span>tomorrow</span>
                    </p>
                </div>
            ) : (
                <div className={styles.benefitsMenuItem}>
                    <Image src={DeliveryIcon} alt="" />
                    <p>
                        Restocking <span>next week</span>
                    </p>
                </div>
            )}
            <div className={styles.benefitsMenuItem}>
                <Image src={TruckIcon} alt="" />
                <p>
                    <span>Free</span> delivery
                </p>
            </div>
            <div className={styles.benefitsMenuItem}>
                <Image src={ShopIcon} alt="" />
                <p>
                    <span>{stock === 0 ? 'No product' : 'Available'}</span> in the store
                </p>
            </div>
        </div>
    )
}

export default BuyMenuBenefits
