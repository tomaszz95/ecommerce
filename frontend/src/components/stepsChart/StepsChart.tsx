import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import styles from './StepsChart.module.css'

type ComponentType = {
    step: string
}

const stepLabels = ['cart', 'delivery', 'payment', 'summary']

const StepsChart = ({ step }: ComponentType) => {
    const currentStepIndex = stepLabels.indexOf(step)

    return (
        <div className={styles.stepsContainer}>
            {stepLabels.map((label, index) => {
                const isCompleted = index < currentStepIndex
                const isActive = index === currentStepIndex
                const stepClasses = `${styles.step} ${isCompleted ? styles.completed : ''} ${isActive ? styles.active : ''}`
                const lineClasses = `${styles.line} ${isCompleted || isActive ? styles.lineCompleted : ''}`
                const labelClasses = `${styles.stepLabel} ${isActive ? styles.activeLabel : ''} ${isCompleted ? styles.completedLabel : ''}`
                const stepCapitalize = capitalizeFirstLetter(label)

                return (
                    <div key={label} className={styles.stepWrapper}>
                        {index > 0 && <div className={lineClasses} />}
                        <div className={stepClasses}>
                            <span className={styles.stepNumber}>{index + 1}</span>
                        </div>
                        <span className={labelClasses}>{stepCapitalize}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default StepsChart
