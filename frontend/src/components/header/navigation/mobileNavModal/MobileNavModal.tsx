import Image from 'next/image'
import XIcon from '../../../../assets/icons/x.png'
import MobileNav from './MobileNav'

import styles from './MobileNavModal.module.css'

type ComponentType = {
    onClose: () => void
}

const MobileNavModal: React.FC<ComponentType> = ({ onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalOverlay} onClick={onClose} />
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <span>Menu</span>
                    <button onClick={onClose}>
                        <Image src={XIcon} alt="" />
                    </button>
                </div>
                <MobileNav onClose={onClose} />
            </div>
        </div>
    )
}

export default MobileNavModal
