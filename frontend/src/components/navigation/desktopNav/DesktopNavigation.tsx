import DesktopNavContent from './DesktopNavContent'

import styles from './DesktopNavigation.module.css'

const DesktopNavigation = () => {
    return (
        <nav className={styles.desktopNav}>
            <DesktopNavContent />
        </nav>
    )
}

export default DesktopNavigation
