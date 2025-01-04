import Image from 'next/image'

import ProductListItemInfo from './ProductListItemInfo'
import BuyMenuBenefits from '../../../components/productPage/productInfo/productBuyMenu/BuyMenuBenefits'
import CurrentPrice from '../../../components/currentPrice/CurrentPrice'
import HightlightButton from '../../../components/UI/buttons/HightlightButton'

import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'

import { API_URL, FRONTEND_URL } from '../../../constans/url'

import { categorySingleProductData } from '../../../types/types'

import FavoriteIcon from '../../../assets/icons/favoritefill.svg'

import styles from './ProductsListItem.module.css'

type ComponentType = {
    product: categorySingleProductData
    isUserFav?: boolean
}

const ProductsListItem = ({ product, isUserFav = false }: ComponentType) => {
    const productName = createLinkFromProductName(product.name)
    const productLink = `${FRONTEND_URL}/shop/${product.category.toLocaleLowerCase()}/${product.uniqueId}/${productName}`

    const deleteFromFav = async () => {
        try {
            const response = await fetch(`${API_URL}/api/users/updateUserFavorites`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product._id,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                throw new Error(errorData.msg || 'Something went wrong.')
            }

            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <li className={`${styles.listItem} ${product.recommended ? styles.recommended : ''}`}>
            {product.recommended && <span className={styles.recommendedText}>Recommended</span>}
            <div className={styles.listMainDataBox}>
                <h2>{product.name}</h2>
                <img
                    src={`${API_URL}/photos/${product.image}`}
                    width={1000}
                    height={1000}
                    alt={product.name}
                    crossOrigin="anonymous"
                />
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

            {isUserFav && (
                <button
                    type="button"
                    className={`${styles.favoriteButton} ${styles.active} `}
                    onClick={deleteFromFav}
                    aria-label="Click to delete from favorite"
                >
                    <Image src={FavoriteIcon} alt="" />
                </button>
            )}
        </li>
    )
}

export default ProductsListItem
