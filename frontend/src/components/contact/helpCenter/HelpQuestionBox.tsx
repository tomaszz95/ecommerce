import { useEffect, useState } from 'react'

import helpCenterItems from '../../../constans/helpCenterItems'

import styles from './HelpQuestionBox.module.css'

type ComponentType = {
    activeSection: string
}

const HelpQuestionBox = ({ activeSection }: ComponentType) => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null)

    const selectedSection = helpCenterItems.find((item) => item.text === activeSection)

    if (!selectedSection) {
        return (
            <div className={styles.helpQuestionContainer}>
                <p className={styles.helpQuestionError}>An error occured, please try again later</p>
            </div>
        )
    }

    const handleQuestionClick = (index: number) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index)
    }

    useEffect(() => {
        setOpenQuestionIndex(null)
    }, [activeSection])

    return (
        <div className={styles.helpQuestionContainer}>
            <h2>{selectedSection.text}</h2>
            <ul>
                {selectedSection.questions.map((item, index) => (
                    <li
                        key={item.answer}
                        className={`${styles.questionItem} ${openQuestionIndex === index ? styles.open : ''}`}
                    >
                        <h3 onClick={() => handleQuestionClick(index)} className={styles.questionTitle}>
                            {item.question}
                        </h3>
                        <p className={styles.answerText}>{item.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HelpQuestionBox
