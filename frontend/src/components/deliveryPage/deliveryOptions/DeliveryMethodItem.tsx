import Image, { StaticImageData } from 'next/image'

import styles from './DeliveryMethodItem.module.css'

type ComponentType = {
    onSelectMethod: (value: string) => void
    selectedMethod: string
    inputValue: string
    additionalText?: string
    icon: StaticImageData
    iconsBig?: boolean
    iconText: string
}

const DeliveryMethodItem = ({
    selectedMethod,
    onSelectMethod,
    inputValue,
    additionalText,
    icon,
    iconText,
    iconsBig,
}: ComponentType) => {
    return (
        <div
            className={`${styles.methodBox} ${selectedMethod === inputValue ? styles.active : ''}`}
            onClick={() => onSelectMethod(inputValue)}
        >
            <input
                value={inputValue}
                type="radio"
                checked={selectedMethod === inputValue}
                onChange={() => onSelectMethod(inputValue)}
            />
            <div className={styles.methodsTitle}>
                <div
                    className={`${styles.methodsInputRadio} ${selectedMethod === inputValue ? styles.checked : ''}`}
                ></div>
                <div className={styles.methodsText}>
                    <b>{inputValue}</b>
                    {additionalText && <span>{additionalText}</span>}
                </div>
            </div>
            <div className={`${styles.methodsIcon} ${iconsBig ? styles.iconsBig : ''}`}>
                <Image src={icon} alt="" />
                <span>{iconText}</span>
            </div>
        </div>
    )
}

export default DeliveryMethodItem
