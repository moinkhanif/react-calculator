import './App.css';
import { Component } from 'react';
import Display from '../components/Display/display.component';
import ButtonPanel from '../components/ButtonPanel/button-panel.component';
import calculate from '../components/logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const name = buttonName.target.textContent;
    this.setState(state => calculate(state, name));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main-container">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
