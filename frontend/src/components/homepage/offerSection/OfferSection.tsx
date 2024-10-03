import Image from 'next/image'
import Link from 'next/link'
import offerSectonItems from '../../../constans/offerSectonItems'

import styles from './OfferSection.module.css'

const OfferSection = () => {
    return (
        <section className={styles.offerSection}>
            {offerSectonItems.map((item) => (
                <div className={styles.offerSectionBox} key={item.name}>
                    <div className={styles.offerSectionHero}>
                        <Image src={item.photo} alt="" />
                        <div className={styles.offerSectionShadow} />
                        <div className={styles.offerSectionSubcategory}>
                            {item.subcategories.map((subItem) => (
                                <Link
                                    className={styles.offerSectionSubcategoryLink}
                                    href={subItem.link}
                                    key={subItem.link}
                                >
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default OfferSection
