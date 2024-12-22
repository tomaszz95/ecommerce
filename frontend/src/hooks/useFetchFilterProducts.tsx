const useFetchFilterProducts = async (url: string) => {
    const response = await fetch(url)

    if (!response.ok) {
        const errorData = await response.json()

        throw new Error(errorData.msg || 'Something went wrong')
    }

    const data = await response.json()
    return data
}

export default useFetchFilterProducts
