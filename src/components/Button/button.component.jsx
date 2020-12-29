import propTypes from 'prop-types';
import './button.styles.css';

const handleClick = clickHandler => clickHandler;

const Button = props => {
  const {
    name, title, clickHandler, color, wide,
  } = props;
  return (
    <button type="button" onClick={handleClick(clickHandler)} className={`calculator-key ${wide} ${color}`} title={title}>{ name }</button>
  );
};

Button.propTypes = {
  name: propTypes.string,
  title: propTypes.string,
  clickHandler: propTypes.func.isRequired,
  color: propTypes.string,
  wide: propTypes.bool,
};

Button.defaultProps = {
  name: '',
  title: undefined,
  color: 'orange',
  wide: false,
};

export default Button;
