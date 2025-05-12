import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

const MobileNavPortal = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    if (!mounted) return null

    return createPortal(children, document.body)
}

export default MobileNavPortal
