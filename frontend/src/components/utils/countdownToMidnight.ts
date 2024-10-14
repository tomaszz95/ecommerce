const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`
}

const countdownToMidnight = () => {
    const now = new Date()
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
    const difference = endOfDay.getTime() - now.getTime()

    if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        return {
            hours: formatTime(hours),
            minutes: formatTime(minutes),
            seconds: formatTime(seconds),
        }
    } else {
        return {
            hours: '00',
            minutes: '00',
            seconds: '00',
        }
    }
}

export default countdownToMidnight
