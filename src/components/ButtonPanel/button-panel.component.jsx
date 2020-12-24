import Button from '../Button/button.component';
import './button-panel.styles.css';

const ButtonPanel = () => {
  const groups = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'X'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };
  const keys = [0, 1, 2, 3, 4];
  return (
    <div className="groups">
      { Object.keys(groups).map((group, i) => (
        <div key={keys[i]} className={`group ${group}`}>
          {groups[group].map((name, j) => <Button key={keys[j]} name={name} />)}
        </div>
      )) }
    </div>
  );
};

export default ButtonPanel;