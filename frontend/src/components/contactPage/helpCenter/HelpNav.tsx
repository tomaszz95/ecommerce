import Image from 'next/image'

import helpCenterItems from '../../../constans/helpCenterItems'

import styles from './HelpNav.module.css'

type ComponentType = {
    onActiveSection: (activeSection: string) => void
    activeSection: string
}

const HelpNav = ({ onActiveSection, activeSection }: ComponentType) => {
    return (
        <div className={styles.helpContainer}>
            {helpCenterItems.map((item) => (
                <button
                    key={item.text}
                    className={`${activeSection === item.text ? styles.active : ''}`}
                    onClick={() => onActiveSection(item.text)}
                >
                    <Image src={item.icon} alt="" />
                    <p>{item.text}</p>
                </button>
            ))}
        </div>
    )
}

export default HelpNav
