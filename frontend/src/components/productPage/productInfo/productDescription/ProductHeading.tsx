import Image from 'next/image'
import Link from 'next/link'

import StarRating from '../../../starRating/StarRating'

import getBrandLogo from '../../../../helpers/getBrandLogo'

import SpeechBubbleIcon from '../../../../assets/icons/speechbubble.svg'
import styles from './ProductHeading.module.css'

type ComponentType = {
    productName: string
    company: string
    averageRating: number
    numOfReviews: number
}

const ProductHeading = ({ productName, company, averageRating, numOfReviews }: ComponentType) => {
    const brandLogo = getBrandLogo(company)

    return (
        <div className={styles.productHeading}>
            <div className={styles.productHeadingTitle}>
                <h1>{productName}</h1>
                {brandLogo && <Image src={brandLogo} alt={`${company} logo`} aria-label={`${brandLogo} logo`} />}
            </div>
            <div className={styles.productContainer}>
                <StarRating rating={averageRating} />
                <div className={styles.productOpinions}>
                    <Image src={SpeechBubbleIcon} alt="" />
                    <Link href="#opinions" aria-label="Go to opinions">
                        {numOfReviews} {numOfReviews === 1 ? 'opinion' : 'opinions'}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductHeading
