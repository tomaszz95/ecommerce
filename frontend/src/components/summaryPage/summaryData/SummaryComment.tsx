import useInput from '../../../hooks/useInput'
import styles from './SummaryComment.module.css'
import TextArea from '../../../components/UI/textarea/TextArea'

const SummaryComment = () => {
    const { value: enteredComment, valueChangeHandler: commentChangeHandler } = useInput((value) => value.trim() !== '')

    return (
        <>
            <h3 className={styles.title}>Order comment</h3>
            <p>If you add a comment, the order processing time may be longer.</p>
            <TextArea
                label="Your comment.."
                id="Comment"
                value={enteredComment}
                onChange={commentChangeHandler}
                maxLength={2000}
            ></TextArea>
            <span className={styles.bottomText}>
                <span className={styles.commentLenght}>{enteredComment.length}</span>
                /2000
            </span>
        </>
    )
}

export default SummaryComment
