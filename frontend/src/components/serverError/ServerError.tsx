import styles from './ServerError.module.css'

const ServerError = () => {
    return (
        <div className={styles.error}>
            <h1>Something went wrong.</h1>
            <h2>Please try again later.</h2>
        </div>
    )
}

export default ServerError
