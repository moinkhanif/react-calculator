import renderer from 'react-test-renderer';
import Calculator from './Calculator';

test('renders learn react link', () => {
  const result = renderer.create(<Calculator />).toJSON();
  expect(result).toMatchSnapshot();
});
