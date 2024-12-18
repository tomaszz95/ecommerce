import Image from 'next/image'

import StarRating from '../../../components/starRating/StarRating'

import getBrandLogo from '../../../helpers/getBrandLogo'
import SpeechBubbleIcon from '../../../assets/icons/speechbubble.svg'

import { productType } from '../../../types/types'

import styles from './ProductListItemInfo.module.css'

type ComponentType = {
    product: productType
}

const ProductListItemInfo = ({ product }: ComponentType) => {
    const brandLogo = getBrandLogo(product.company)

    return (
        <div className={styles.listInfoBox}>
            <div className={styles.listAdditionalInfoBox}>
                <div className={styles.listAdditionalInfoBoxOpinions}>
                    <StarRating rating={opinions ? opinions.opinionsAverage : 0} />
                    <div className={styles.productOpinions}>
                        <Image src={SpeechBubbleIcon} alt="" />
                        <p>{opinionsText}</p>
                    </div>
                </div>
                {brandLogo && <Image src={brandLogo} alt={`${product.company} logo`} />}
            </div>
            <p className={styles.listInfoDescription}>{product.description}</p>
        </div>
    )
}

export default ProductListItemInfo
