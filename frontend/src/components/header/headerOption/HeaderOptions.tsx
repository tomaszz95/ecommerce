import HeaderItem from './HeaderItem'

import headerOptionItems from '../../../constans/headerOptionItems'
import styles from './HeaderOptions.module.css'

const HeaderOptions = () => {
    return (
        <div className={styles.headerOptions}>
            {headerOptionItems.map((item) => (
                <HeaderItem icon={item.icon} text={item.text} href={item.href} key={item.href} />
            ))}
        </div>
    )
}

export default HeaderOptions
