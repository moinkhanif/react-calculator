import propTypes from 'prop-types';
import './button.styles.css';

const handleClick = e => {
  e.target.classList.add('sel');
};

const Button = props => {
  const { name } = props;
  return (
    <button type="button" onClick={handleClick} className="calculator-key">{ name }</button>
  );
};

Button.propTypes = {
  name: propTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
