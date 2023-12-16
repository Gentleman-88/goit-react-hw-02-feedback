import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positivePercentage = total ? Math.round((good / total) * 100) : 0;
    return (
        <div>
            {total ? ( 
                <ul className={css.Statistics_list}>
                    <li className={css.statistics_item}>Good: {good}</li>
                    <li className={css.statistics_item}>Neutral: {neutral}</li>
                    <li className={css.statistics_item}>Bad: {bad}</li>
                    <li className={css.statistics_item}>Total: {total}</li>
                    <li className={css.statistics_item}>Positive feedback: {positivePercentage}%</li>
                </ul>
            ) : (
                    <p className={css.no_feedback_item}>No feedbacks yet</p>
            ) }
        </div>
    )
}

export {Statistics}