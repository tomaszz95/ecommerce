'use client'

import { useState } from 'react'

import HelpNav from './HelpNav'
import HelpQuestionBox from './HelpQuestionBox'

import styles from './HelpCenter.module.css'

const HelpCenter = () => {
    const [activeSection, setActiveSection] = useState('Frequently asked')

    return (
        <section className={styles.helpSection}>
            <h1>Help Center</h1>
            <h2>How can we help you?</h2>
            <HelpNav onActiveSection={setActiveSection} activeSection={activeSection} />
            <HelpQuestionBox activeSection={activeSection} />
        </section>
    )
}

export default HelpCenter
