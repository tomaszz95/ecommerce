import { useEffect } from 'react'

type MetadataProps = {
    title: string
    description: string
}

const useMetadata = ({ title, description }: MetadataProps) => {
    useEffect(() => {
        document.title = `NeXtPC - ${title}`

        const metaDescription = document.querySelector('meta[name="description"]')

        if (metaDescription) {
            metaDescription.setAttribute('content', `NeXtPC ${description}`)
        }
    }, [title, description])
}

export default useMetadata
