const createLinkFromProductName = (prodName: string) => {
    const productSlug = prodName
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .trim()

    return productSlug
}

export default createLinkFromProductName
