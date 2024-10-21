import styles from './ProgressBarRow.module.css'

type ComponentType = {
    value: 1 | 2 | 3 | 4 | 5
    count: number
    barWidth: number
}

const ProgressBarRow = ({ value, count, barWidth }: ComponentType) => {
    return (
        <div className={styles.progressRow}>
            <div className={styles.starText}>★ {value}</div>
            <div className={styles.progressBar}>
                <div className={styles.filledBar} style={{ width: `${barWidth}%` }} />
            </div>
            <span>{count}</span>
        </div>
    )
}

export default ProgressBarRow
