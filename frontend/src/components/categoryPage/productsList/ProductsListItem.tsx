import Image from 'next/image'

import ProductListItemInfo from './ProductListItemInfo'
import BuyMenuBenefits from '../../../components/productPage/productInfo/productBuyMenu/BuyMenuBenefits'
import CurrentPrice from '../../../components/currentPrice/CurrentPrice'
import HightlightButton from '../../../components/UI/buttons/HightlightButton'

import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'

import { API_URL, FRONTEND_URL } from '../../../constans/url'

import { categorySingleProductData } from '../../../types/types'

import styles from './ProductsListItem.module.css'

type ComponentType = {
    product: categorySingleProductData
}

const ProductsListItem = ({ product }: ComponentType) => {
    const productName = createLinkFromProductName(product.name)
    const productLink = `${FRONTEND_URL}/shop/${product.category.toLocaleLowerCase()}/${product.uniqueId}/${productName}`

    return (
        <li className={`${styles.listItem} ${product.recommended ? styles.recommended : ''}`}>
            {product.recommended && <span className={styles.recommendedText}>Recommended</span>}
            <div className={styles.listMainDataBox}>
                <h2>{product.name}</h2>
                <Image src={`${API_URL}/photos/${product.image}`} width={1000} height={1000} alt={product.name} />
            </div>
            <ProductListItemInfo
                averageRating={product.averageRating}
                numOfReviews={product.numOfReviews}
                company={product.company}
                description={product.description}
            />
            <div className={styles.listSaleBox}>
                <CurrentPrice price={product.price} promotionPrice={product.promotion.promotionPrice} isBig />
                <BuyMenuBenefits stock={product.stock} />
                <div className={styles.listSaleBoxBtn}>
                    <HightlightButton href={productLink}>Show more</HightlightButton>
                </div>
            </div>
        </li>
    )
}

export default ProductsListItem
