import Image from 'next/image'
import Link from 'next/link'

import StarRating from '../../../starRating/StarRating'

import getBrandLogo from '../../../../helpers/getBrandLogo'
import getOpinions from '../../../../components/utils/getOpinions'

import SpeechBubbleIcon from '../../../../assets/icons/speechbubble.svg'
import styles from './ProductHeading.module.css'

type ComponentType = {
    productName: string
    productId: string
    company: string
}

const ProductHeading = ({ productName, productId, company }: ComponentType) => {
    const { opinions, opinionsText } = getOpinions(productId, true)
    const brandLogo = getBrandLogo(company)

    return (
        <div className={styles.productHeading}>
            <div className={styles.productHeadingTitle}>
                <h1>{productName}</h1>
                {brandLogo && <Image src={brandLogo} alt={`${company} logo`} aria-label={`${brandLogo} logo`} />}
            </div>
            <div className={styles.productContainer}>
                <StarRating rating={opinions ? opinions.opinionsAverage : 0} />
                <div className={styles.productOpinions}>
                    <Image src={SpeechBubbleIcon} alt="" />
                    <Link href="#opinions" aria-label="Go to opinions">
                        {opinionsText}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductHeading
