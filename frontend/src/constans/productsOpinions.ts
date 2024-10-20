import { productOpinionType } from './../types/types'

const productsOpinions: productOpinionType[] = [
    {
        productId: '1',
        opinionsCount: 4,
        opinionsAverage: 3,
        opinions: [
            {
                opinionId: '233',
                opinionAuthor: 'Some author',
                opinionText:
                    'Some text Some textSome text Some text Some text Some text Some text Some textv Some textSome textSome textSome textSome text Some textSome textSome text Some textSome textSome textSome textSome text Some textvvvvvSome textSome textSome text',
                opinionValue: 4,
                likes: 3,
                dislikes: 5,
            },
            {
                opinionId: '2334',
                opinionAuthor: 'Some author 2',
                opinionText:
                    'Some text Some textSome text Some text Some text Some text Some textSome textSome text Some textSome textSome textSome textSome text Some textvvvvvSome textSome textSome text',
                opinionValue: 2,
                likes: 2,
                dislikes: 1,
            },
            {
                opinionId: '2344',
                opinionAuthor: 'Some author 2',
                opinionText:
                    'Some text Some textSome text Some text Some text Some text Some textSome textSome text Some textSome textSome textSome textSome text Some textvvvvvSome textSome textSome text',
                opinionValue: 1,
                likes: 2,
                dislikes: 1,
            },
            {
                opinionId: '2234',
                opinionAuthor: 'Some author 2',
                opinionText:
                    'Some text Some textSome text Some text Some text Some text Some textSome textSome text Some textSome textSome textSome textSome text Some textvvvvvSome textSome textSome text',
                opinionValue: 5,
                likes: 2,
                dislikes: 1,
            },
        ],
    },
    {
        productId: '12',
        opinionsCount: 1,
        opinionsAverage: 4,
        opinions: [
            {
                opinionId: '233',
                opinionAuthor: 'Some author',
                opinionText:
                    'Some text Some textSome text Some text Some text Some text Some text Some textv Some textSome textSome textSome textSome text Some textSome textSome text Some textSome textSome textSome textSome text Some textvvvvvSome textSome textSome text',
                opinionValue: 4,
                likes: 3,
                dislikes: 5,
            },
        ],
    },
]

export default productsOpinions
