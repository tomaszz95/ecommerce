import Image from 'next/image'

import loginOfferItems from '../../constans/loginOfferItems'

import styles from './RegisterBenefits.module.css'

const RegisterBenefits = () => {
    return (
        <div className={styles.benefitsAuthBox}>
            <h3>Why is it worth having an account at neXtPC?</h3>
            {loginOfferItems.map((item) => (
                <div key={item.text} className={styles.benefitsAuthItems}>
                    <Image src={item.icon} alt="" />
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default RegisterBenefits
