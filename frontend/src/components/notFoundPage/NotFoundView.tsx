import HightlightButton from '../UI/buttons/HightlightButton'

import styles from './NotFoundView.module.css'

const NotFoundView = () => {
    return (
        <section className={styles.notFound}>
            <h1>404</h1>
            <h2>Error 404 - page not found</h2>
            <p>
                The page you are looking for might have been removed, had its name changed or is temporarily
                unavailable.
            </p>
            <HightlightButton href="/">Go to homepage</HightlightButton>
        </section>
    )
}

export default NotFoundView
