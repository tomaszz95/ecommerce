import productsOpinions from '../../../constans/productsOpinions'

import styles from './OpinionsSection.module.css'
import OpinionsStatistics from './opinionsStatistics/OpinionsStatistics'

type ComponentType = {
    productId: string
}

const OpinionsSection = ({ productId }: ComponentType) => {
    const filteredOpinions = productsOpinions.find((opinions) => opinions.productId === productId)

    return (
        <section id="opinions" className={styles.opinionsSection}>
            <h2>Opinions</h2>
            {filteredOpinions && <OpinionsStatistics opinions={filteredOpinions} />}
        </section>
    )
}

export default OpinionsSection
