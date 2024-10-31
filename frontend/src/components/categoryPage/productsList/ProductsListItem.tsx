import Image from 'next/image'

import { productType } from '../../../types/types'

import styles from './ProductsListItem.module.css'
import BuyMenuBenefits from '../../../components/productPage/productInfo/productBuyMenu/BuyMenuBenefits'
import CurrentPrice from '../../../components/currentPrice/CurrentPrice'
import HightlightButton from '../../../components/UI/buttons/HightlightButton'
import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'
import ProductListItemInfo from './ProductListItemInfo'

type ComponentType = {
    product: productType
}

const ProductsListItem = ({ product }: ComponentType) => {
    const productLink = createLinkFromProductName(product.name)

    return (
        <li className={`${styles.listItem} ${product.recommended ? styles.recommended : ''}`}>
            {product.recommended && <span className={styles.recommendedText}>Recommended</span>}
            <div className={styles.listMainDataBox}>
                <h2>{product.name}</h2>
                <Image src={product.images[0]} alt={product.name} />
            </div>
            <ProductListItemInfo product={product} />
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
