import PropTypes from 'prop-types';
import './Statistics.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className="text">
        Good: <span className="span">{good}</span>
      </p>
      <p className="text">
        Neutral: <span className="span">{neutral}</span>
      </p>
      <p className="text">
        Bad: <span className="text">{bad}</span>
      </p>
      <p className="text">
        Total: <span className="span">{total}</span>
      </p>
      <p className="text">
        Positive feedback: <span className="span">{positivePercentage}%</span>
      </p>
    </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
