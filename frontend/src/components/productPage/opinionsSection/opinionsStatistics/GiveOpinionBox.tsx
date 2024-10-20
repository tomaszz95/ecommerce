'use client'

import styles from './GiveOpinionBox.module.css'

const GiveOpinionBox = () => {
    const openModalHandler = () => {
        console.log('modal')
    }

    return (
        <div className={styles.giveOpinionBox}>
            <h3>Do you have this product?</h3>
            <p>Rate it honestly and help others choose</p>
            <button type="button" className={styles.openModalButton} onClick={openModalHandler}>
                Add opinion
            </button>
        </div>
    )
}

export default GiveOpinionBox
