import './App.css';
import { useState } from 'react';
import Heading from '../../components/Heading/heading.component';
import Display from '../../components/Display/display.component';
import ButtonPanel from '../../components/ButtonPanel/button-panel.component';
import calculate from '../../components/logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = state;

  const handleClick = buttonName => {
    const name = buttonName.target.textContent;
    setState(state => calculate(state, name));
  };

  return (
    <div className="main-container">
      <Heading />
      <Display result={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
