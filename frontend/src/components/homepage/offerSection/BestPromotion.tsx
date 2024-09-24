import Link from 'next/link'
import Image from 'next/image'

import SingleProduct from '../../../components/singleProduct/SingleProduct'

import dummyProducts from '../../../constans/dummyProducts'
import styles from './BestPromotion.module.css'

const BestPromotion = () => {
    const oneProduct = dummyProducts[0]

    return (
        <SingleProduct
            name={oneProduct.name}
            prodId={oneProduct.prodId}
            mainImage={oneProduct.mainImage}
            category={oneProduct.category}
            price={oneProduct.price}
        />
    )
}

export default BestPromotion
