import renderer from 'react-test-renderer';
import Quote from './Quote';

test('renders learn react link', () => {
  const quoteData = ['Test Quote -Testie'];
  const result = renderer.create(<Quote quoteData={quoteData} />).toJSON();
  expect(result).toMatchSnapshot();
});
