import styles from './StarRating.module.css'

type ComponentType = {
    rating: number
}

const StarRating = ({ rating }: ComponentType) => {
    const totalStars = 5
    const filledStars = Math.round(rating)

    return (
        <div className={styles.starsContainer}>
            {[...Array(totalStars)].map((_, index) => (
                <span key={index}>{index < filledStars ? '★' : '☆'}</span>
            ))}
        </div>
    )
}

export default StarRating
