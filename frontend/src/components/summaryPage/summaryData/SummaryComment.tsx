import useInput from '../../../hooks/useInput'
import styles from './SummaryComment.module.css'
import TextArea from '../../../components/UI/textarea/TextArea'

const SummaryComment = () => {
    const {
        value: enteredComment,
        hasError: commentInputHasError,
        valueChangeHandler: commentChangeHandler,
        inputBlurHandler: commentBlurHandler,
    } = useInput((value) => value.trim() !== '')

    const textAreaLengthClasses = `${styles.commentLenght} ${commentInputHasError ? styles.badLength : enteredComment.length === 2000 ? styles.badLength : enteredComment.length > 0 ? styles.goodLength : ''}`

    return (
        <>
            <h3 className={styles.title}>Order comment</h3>
            <p>If you add a comment, the order processing time may be longer.</p>
            <TextArea
                label="Your comment.."
                id="Comment"
                value={enteredComment}
                hasError={commentInputHasError}
                onChange={commentChangeHandler}
                onBlur={commentBlurHandler}
                errorText="Comment cannot be empty."
                maxLength={2000}
            ></TextArea>
            <span className={styles.bottomText}>
                <span className={textAreaLengthClasses}>{enteredComment.length}</span>
                /2000
            </span>
        </>
    )
}

export default SummaryComment
