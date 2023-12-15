const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <button onClick={() => onLeaveFeedback(options[0])}>{options[0]}</button>
            <button onClick={() => onLeaveFeedback(options[0])}>{options[1]}</button>
            <button onClick={() => onLeaveFeedback(options[0])}>{options[2]}</button>
        </div>
    )
}

export {FeedbackOptions}