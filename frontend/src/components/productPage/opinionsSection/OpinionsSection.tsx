import productsOpinions from '../../../constans/productsOpinions'

import styles from './OpinionsSection.module.css'
import OpinionsStatistics from './opinionsStatistics/OpinionsStatistics'
import OpinionsList from './opinionsContent/OpinionsList'
import OpinionsForm from './opinionsForm/OpinionsForm'

type ComponentType = {
    productId: string
}

const OpinionsSection = ({ productId }: ComponentType) => {
    const filteredOpinions = productsOpinions.find((opinions) => opinions.productId === productId)

    const opinionCount = !filteredOpinions ? 0 : filteredOpinions.opinionsCount

    return (
        <section id="opinions" className={styles.opinionsContainer}>
            <h2>Opinions</h2>
            <div className={`${styles.opinionsSection} ${opinionCount === 0 ? styles.noOpinions : ''}`}>
                <div className={styles.leftColumn}>
                    {filteredOpinions && <OpinionsStatistics opinions={filteredOpinions} />}
                    <OpinionsForm productId={productId} opinionsCount={opinionCount} />
                </div>
                {filteredOpinions && <OpinionsList opinions={filteredOpinions.opinions} />}
            </div>
        </section>
    )
}

export default OpinionsSection
