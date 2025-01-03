import { API_URL } from '../constans/url'

const buildFiltersUrl = (
    params: {
        page?: string
        sort?: string
        priceFrom?: string
        priceTo?: string
        company?: string
        available?: string
        promotion?: string
        search?: string
    },
    category?: string,
) => {
    const {
        page = '1',
        sort = 'default',
        priceFrom = '1',
        priceTo = '9999',
        company = '[]',
        available = 'false',
        promotion = 'false',
        search = '',
    } = params

    const sortUrl = sort === 'default' ? '' : `&sort=${sort}`
    const filtersUrl = `${priceFrom === '1' ? '' : `&priceFrom=${priceFrom}`}${priceTo === '9999' ? '' : `&priceTo=${priceTo}`}${company !== '[]' ? `&company=${company}` : ''}${available === 'true' ? `&available=true` : ''}${promotion === 'true' ? `&promotion=true` : ''}`
    const searchUrl = search.trim() !== '' ? `&search=${search.trim()}` : ''

    const url = category
        ? `${API_URL}/api/products/${category}?page=${page}${sortUrl}${filtersUrl}${searchUrl}`
        : `${API_URL}/api/products/shop?page=${page}${sortUrl}${filtersUrl}${searchUrl}`

    return url
}

export default buildFiltersUrl
