import propTypes from 'prop-types';
import './button.styles.css';

const handleClick = props => props.clickHandler;

const Button = props => {
  const { name, title } = props;
  return (
    <button type="button" onClick={handleClick(props)} className="calculator-key" title={title}>{ name }</button>
  );
};

Button.propTypes = {
  name: propTypes.string,
  title: propTypes.string,
};

Button.defaultProps = {
  name: '',
  title: undefined,
};

export default Button;
