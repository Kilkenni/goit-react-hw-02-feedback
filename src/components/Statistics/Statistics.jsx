import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <p> Good service: { good }</p>
            <p>Neutral: {neutral}</p>
            <p>Bad service: {bad}</p>
            <p>Total feedback: {total}</p>
            <p>Positive feedback: {positivePercentage < 0 ? "unavailable" : positivePercentage + "%"}</p>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;