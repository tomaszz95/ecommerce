const createProductNameFromLink = (slug: string) => {
    const productName = slug
        .replace(/-/g, ' ')
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase())

    return productName
}

export default createProductNameFromLink
