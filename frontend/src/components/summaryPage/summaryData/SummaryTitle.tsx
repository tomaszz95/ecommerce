import styles from './SummaryTitle.module.css'
import PenIcon from '../../../assets/icons/pen.svg'
import Image from 'next/image'
import Link from 'next/link'

type ComponentType = {
    title: string
    link: string
}

const SummaryTitle = ({ title, link }: ComponentType) => {
    return (
        <div className={styles.sectionTitle}>
            <h2>{title}</h2>
            <Link href={link} className={styles.editLink}>
                <Image src={PenIcon} alt="" />
                <span>Edit</span>
            </Link>
        </div>
    )
}

export default SummaryTitle
