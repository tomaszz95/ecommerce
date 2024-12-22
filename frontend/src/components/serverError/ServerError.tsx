import styles from './ServerError.module.css'

type ComponentType = {
    errorText?: string
    errorMsg?: string
}

const ServerError = ({ errorText = 'Something went wrong', errorMsg = 'Please try again later.' }: ComponentType) => {
    return (
        <div className={styles.error}>
            <h1>{errorText}</h1>
            <h2>{errorMsg}</h2>
        </div>
    )
}

export default ServerError
