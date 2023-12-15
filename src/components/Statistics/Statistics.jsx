const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positivePercentage = total ? Math.round((good / total) * 100) : 0;
    return (
        <div>
            {total ? ( 
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positivePercentage}%</li>
                </ul>
            ) : (
                    <p>No feedbacks yet</p>
            ) }
        </div>
    )
}

export {Statistics}