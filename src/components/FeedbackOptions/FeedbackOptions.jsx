import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <>
        {options.map(({ name, title }) => {
            return <button type="button" className={style.btnFeedbackOption} key={name} name={name} onClick={onLeaveFeedback}> {title} </button>; 
        })
        }
    </>;
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired  ,
        })       
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;