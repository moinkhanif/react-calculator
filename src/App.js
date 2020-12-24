import { Component } from 'react';
import propTypes from 'prop-types';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.title}
          </a>
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
