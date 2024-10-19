import Image from 'next/image'
import Link from 'next/link'
import SpeechBubbleIcon from '../../../../assets/icons/speechbubble.svg'
import StarRating from './StarRating'

import getBrandLogo from '../../../../helpers/getBrandLogo'
import productsOpinions from '../../../../constans/productsOpinions'

import styles from './ProductHeading.module.css'

type ComponentType = {
    productName: string
    productId: string
    company: string
}

const ProductHeading = ({ productName, productId, company }: ComponentType) => {
    const findOpinion = productsOpinions.find((product) => productId === product.productId)
    const opinionsCount = findOpinion ? findOpinion.opinions.length : 0
    const opinionsText =
        opinionsCount === 0
            ? 'No opinions yet'
            : opinionsCount === 1
              ? `See ${opinionsCount} opinion`
              : `See ${opinionsCount}  opinions`
    const brandLogo = getBrandLogo(company)

    return (
        <div className={styles.productHeading}>
            <div className={styles.productHeadingTitle}>
                <h1>{productName}</h1>
                {brandLogo && <Image src={brandLogo} alt={`${company} logo`} />}
            </div>
            <div className={styles.productContainer}>
                <StarRating rating={productsOpinions[0].opinionsAverage} />
                <div className={styles.productOpinions}>
                    <Image src={SpeechBubbleIcon} alt="" />
                    <Link href="#opinions">{opinionsText}</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductHeading
