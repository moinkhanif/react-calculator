import PropTypes from 'prop-types';
import './Quote.styles.css';

const Quote = ({ quoteData }) => {
  const [quote, author] = quoteData[
    Math.floor(Math.random() * quoteData.length)
  ].split('–');
  return (
    <blockquote id="quote">
      {quote}
      <span>{`- ${author}`}</span>
    </blockquote>
  );
};

Quote.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  quoteData: PropTypes.array,
};

Quote.defaultProps = {
  quoteData: ['Default Quote'],
};

export default Quote;
