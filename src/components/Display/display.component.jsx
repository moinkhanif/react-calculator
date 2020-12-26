import propTypes from 'prop-types';
import './display.styles.css';

const Display = ({ result, next, operation }) => {
  if (result && operation && next) {
    return <div className="result">{`${result}${operation}${next}`}</div>;
  } if (result && operation && operation !== '=') {
    return <div className="result">{`${result}${operation}`}</div>;
  } if (result || result === '-0') {
    return <div className="result">{result}</div>;
  }
  return <div className="result">0</div>;
};

Display.propTypes = {
  result: propTypes.string,
  next: propTypes.string,
  operation: propTypes.string,
};

Display.defaultProps = {
  result: '0',
  next: '0',
  operation: '+',
};

export default Display;
