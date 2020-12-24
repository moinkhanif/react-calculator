import propTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div>{result}</div>
  );
};

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
