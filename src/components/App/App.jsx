import './App.css';
import Display from '../Display/display.component';
import ButtonPanel from '../ButtonPanel/button-panel.component';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => (
  <div className="main-container">
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
