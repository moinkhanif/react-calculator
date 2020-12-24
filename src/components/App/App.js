import propTypes from 'prop-types';
import './App.css';

const App = ({ title }) => (
  <div className="App">
    <header className="App-header">
      {title}
    </header>
  </div>
);

App.propTypes = {
  title: propTypes.string,
};

App.defaultProps = {
  title: 'Calculator',
};

export default App;
