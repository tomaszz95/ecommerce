import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const MobileNavPortal = ({ children }: any) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    if (!mounted) return null

    return createPortal(children, document.body)
}

export default MobileNavPortal