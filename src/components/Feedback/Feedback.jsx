import css from './Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.buttons_list}>
            <button className={css.feedback_button} onClick={() => onLeaveFeedback(options[0])}>{options[0]}</button>
            <button className={css.feedback_button} onClick={() => onLeaveFeedback(options[1])}>{options[1]}</button>
            <button className={css.feedback_button} onClick={() => onLeaveFeedback(options[2])}>{options[2]}</button>
        </ul>
    )
}

export {FeedbackOptions}