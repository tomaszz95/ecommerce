import Image from 'next/image'
import Link from 'next/link'

import PenIcon from '../../../assets/icons/pen.svg'

import styles from './SummaryTitle.module.css'

type ComponentType = {
    title: string
    link: string
    canEdit: boolean
}

const SummaryTitle = ({ title, link, canEdit }: ComponentType) => {
    return (
        <div className={styles.sectionTitle}>
            <h2>{title}</h2>
            {canEdit && (
                <Link href={link} className={styles.editLink} aria-label="Edit data">
                    <Image src={PenIcon} alt="" />
                    <span>Edit</span>
                </Link>
            )}
        </div>
    )
}

export default SummaryTitle
