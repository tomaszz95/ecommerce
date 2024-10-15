import Image from 'next/image'
import Link from 'next/link'

import SpeechBubbleIcon from '../../assets/icons/speechbubble.svg'

import productsOpinions from '../../constans/productsOpinions'

import styles from './ProductHeading.module.css'
import StarRating from '../starRating/StarRating'

type ComponentType = {
    productName: string
    productId: string
}

const ProductHeading = ({ productName, productId }: ComponentType) => {
    const opinionsCount = productsOpinions[0].opinions.length
    const opinionsText = opinionsCount === 1 ? 'opinion' : 'opinions'

    return (
        <div className={styles.productHeading}>
            <h1>{productName}</h1>
            <div className={styles.productContainer}>
                <StarRating rating={productsOpinions[0].opinionsAverage} />
                <div className={styles.productOpinions}>
                    <Image src={SpeechBubbleIcon} alt="" />
                    <Link href="#opinions">
                        See {opinionsCount} {opinionsText}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductHeading
