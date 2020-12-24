import './App.css';
import Display from './components/Display/display.component';
import ButtonPanel from './components/ButtonPanel/button-panel.component';

const App = () => (
  <div className="main-container">
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
