import Image from 'next/image'

import getBrandLogo from '../../helpers/getBrandLogo'

import styles from './ProductDescription.module.css'

type ComponentType = {
    description: string
    company: string
}

const ProductDescription = ({ description, company }: ComponentType) => {
    const brandLogo = getBrandLogo(company)

    return (
        <div className={styles.descriptionBox}>
            <p>{description}</p>
            {brandLogo && <Image src={brandLogo} alt={`${company} logo`} />}
        </div>
    )
}

export default ProductDescription
