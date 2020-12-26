import propTypes from 'prop-types';
import './button.styles.css';

const Button = props => {
  const { name, clickHandler } = props;
  return (
    <button type="button" onClick={clickHandler} className="calculator-key">{ name }</button>
  );
};

Button.propTypes = {
  name: propTypes.string,
  clickHandler: propTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;
