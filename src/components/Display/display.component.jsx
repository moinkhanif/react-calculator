import propTypes from 'prop-types';
import './display.styles.css';

const Display = ({ result }) => <div className="result">{result}</div>;

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
