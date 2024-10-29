import productsOpinions from '../../constans/productsOpinions'

const getOpinions = (productId: string, long: boolean) => {
    const opinions = productsOpinions.find((opinions) => productId === opinions.productId)
    const opinionsCount = opinions ? opinions.opinions.length : 0
    let opinionsText
    if (long) {
        opinionsText =
            opinionsCount === 0
                ? 'No opinions yet'
                : opinionsCount === 1
                  ? `See ${opinionsCount} opinion`
                  : `See ${opinionsCount}  opinions`
    } else {
        opinionsText =
            opinionsCount === 0
                ? 'No opinions yet'
                : opinionsCount === 1
                  ? `${opinionsCount} opinion`
                  : `${opinionsCount} opinions`
    }

    return { opinions, opinionsText }
}

export default getOpinions
