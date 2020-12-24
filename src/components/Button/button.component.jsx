import propTypes from 'prop-types';
import './button.styles.css';

const Button = props => {
  const { name } = props;
  return (
    <button type="button" className="calculator-key">{ name }</button>
  );
};

Button.propTypes = {
  name: propTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
