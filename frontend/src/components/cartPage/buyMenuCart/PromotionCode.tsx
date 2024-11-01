import styles from './PromotionCode.module.css'

type ComponentType = {
    onPromoCodeHandler: () => void
    promoInput: string
    setPromoInput: (value: string) => void
    isValid: boolean
    discount: number
}

const PromotionCode = ({ onPromoCodeHandler, promoInput, setPromoInput, isValid, discount }: ComponentType) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onPromoCodeHandler()
        }
    }

    return (
        <div className={styles.promotionCodeContainer}>
            <div className={styles.promotionCodeBox}>
                <input
                    placeholder="Enter promotion code"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={onPromoCodeHandler}>Activate</button>
            </div>
            {!isValid && <p className={styles.error}>Please enter a valid code</p>}
            {isValid && discount > 0 && <p className={styles.valid}>Code is valid</p>}
        </div>
    )
}

export default PromotionCode
