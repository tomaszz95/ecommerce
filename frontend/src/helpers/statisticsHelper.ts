import { singleOpinionType } from '../types/types'

export const calculateOpinionCounts = (opinions: singleOpinionType[]) => {
    return opinions.reduce(
        (acc, curr) => {
            acc[curr.rating as 1 | 2 | 3 | 4 | 5] = (acc[curr.rating as 1 | 2 | 3 | 4 | 5] || 0) + 1
            return acc
        },
        { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    )
}

export const calculateBarWidth = (
    value: 1 | 2 | 3 | 4 | 5,
    opinionCounts: Record<1 | 2 | 3 | 4 | 5, number>,
    totalOpinions: number,
) => {
    return (opinionCounts[value] / totalOpinions) * 100
}
