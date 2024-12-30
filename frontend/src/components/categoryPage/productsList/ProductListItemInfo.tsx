import Image from 'next/image'

import StarRating from '../../../components/starRating/StarRating'

import getBrandLogo from '../../../helpers/getBrandLogo'

import SpeechBubbleIcon from '../../../assets/icons/speechbubble.svg'

import styles from './ProductListItemInfo.module.css'

type ComponentType = {
    averageRating: number
    numOfReviews: number
    company: string
    description: string
}

const ProductListItemInfo = ({ averageRating, numOfReviews, company, description }: ComponentType) => {
    const brandLogo = getBrandLogo(company)

    return (
        <div className={styles.listInfoBox}>
            <div className={styles.listAdditionalInfoBox}>
                <div className={styles.listAdditionalInfoBoxOpinions}>
                    <StarRating rating={averageRating} />
                    <div className={styles.productOpinions}>
                        <Image src={SpeechBubbleIcon} alt="" />
                        <p>
                            {numOfReviews} {numOfReviews === 1 ? 'opinion' : 'opinions'}
                        </p>
                    </div>
                </div>
                {brandLogo && <Image width={100} src={brandLogo} alt={`${company} logo`} />}
            </div>
            <p className={styles.listInfoDescription}>{description}</p>
        </div>
    )
}

export default ProductListItemInfo
