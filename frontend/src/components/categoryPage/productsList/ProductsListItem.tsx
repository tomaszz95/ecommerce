import getBrandLogo from '../../../helpers/getBrandLogo'
import Image from 'next/image'
import StarRating from '../../../components/starRating/StarRating'
import { productType } from '../../../types/types'

import styles from './ProductsListItem.module.css'
import BuyMenuBenefits from '../../../components/productPage/productInfo/productBuyMenu/BuyMenuBenefits'
import CurrentPrice from '../../../components/currentPrice/CurrentPrice'
import HightlightButton from '../../../components/UI/buttons/HightlightButton'
import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'
import getOpinions from '../../../components/utils/getOpinions'
import SpeechBubbleIcon from '../../../assets/icons/speechbubble.svg'

type ComponentType = {
    product: productType
}

const ProductsListItem = ({ product }: ComponentType) => {
    const { opinions, opinionsText } = getOpinions(product.prodId, false)
    const brandLogo = getBrandLogo(product.company)
    const productLink = createLinkFromProductName(product.name)

    return (
        <li className={`${styles.listItem} ${product.recommended ? styles.recommended : ''}`}>
            {product.recommended && <span className={styles.recommendedText}>Recommended</span>}
            <div className={styles.listMainDataBox}>
                <h2>{product.name}</h2>
                <Image src={product.images[0]} alt={product.name} />
            </div>
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
            <div className={styles.listSaleBox}>
                <CurrentPrice
                    price={product.price}
                    promotion={product.promotion.isPromotion}
                    promotionPercent={product.promotion.promotionPercent}
                    isBig
                />
                <BuyMenuBenefits stock={product.stock} />
                <div className={styles.listSaleBoxBtn}>
                    <HightlightButton href={`${product.category.link}/${productLink}`}>Show more</HightlightButton>
                </div>
            </div>
        </li>
    )
}

export default ProductsListItem
