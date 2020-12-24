import { Component } from 'react';
import propTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor({ title }) {
    super({ title });
    this.title = title;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.title}
        </header>
      </div>
    );
  }
}

App.propTypes = {
  title: propTypes.string,
};

App.defaultProps = {
  title: 'Calculator',
};

export default App;
