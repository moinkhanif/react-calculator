import propTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <button type="button">{ name }</button>
  );
};

Button.propTypes = {
  name: propTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
