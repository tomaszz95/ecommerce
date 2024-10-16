import Image from 'next/image'
import Link from 'next/link'

import SpeechBubbleIcon from '../../../assets/icons/speechbubble.svg'
import StarRating from './StarRating'

import productsOpinions from '../../../constans/productsOpinions'

import styles from './ProductHeading.module.css'

type ComponentType = {
    productName: string
    productId: string
}

const ProductHeading = ({ productName, productId }: ComponentType) => {
    const findOpinion = productsOpinions.find((product) => productId === product.productId)
    const opinionsCount = findOpinion ? findOpinion.opinions.length : 0
    const opinionsText =
        opinionsCount === 0
            ? 'No opinions yet'
            : opinionsCount === 1
              ? `See ${opinionsCount} opinion`
              : `See ${opinionsCount}  opinions`

    return (
        <div className={styles.productHeading}>
            <h1>{productName}</h1>
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
