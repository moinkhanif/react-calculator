import './App.css';
import Display from '../Display/display.component';
import ButtonPanel from '../ButtonPanel/button-panel.component';

const App = () => (
  <div className="main-container">
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
