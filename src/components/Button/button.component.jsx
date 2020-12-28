import propTypes from 'prop-types';
import './button.styles.css';

const handleClick = clickHandler => clickHandler;

const Button = props => {
  const { name, title, clickHandler } = props;
  return (
    <button type="button" onClick={handleClick(clickHandler)} className="calculator-key" title={title}>{ name }</button>
  );
};

Button.propTypes = {
  name: propTypes.string,
  title: propTypes.string,
  clickHandler: propTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
  title: undefined,
};

export default Button;
