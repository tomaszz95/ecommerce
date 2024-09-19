import Image from 'next/image'

import MobileNavContent from './MobileNavContent'

import XIcon from '../../../../assets/icons/x.svg'
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
                <MobileNavContent onClose={onClose} />
            </div>
        </div>
    )
}

export default MobileNavModal
