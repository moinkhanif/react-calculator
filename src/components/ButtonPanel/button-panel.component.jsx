import Button from '../Button/button.component';
import './button-panel.styles.css';

const handleClick = ({ clickHandler }) => clickHandler;

const ButtonPanel = props => {
  const groups = {
    group1: ['AC,Clear', '+/-,plus/minus sign', '%,percent', '÷,divide'],
    group2: ['7', '8', '9', 'X,multiply'],
    group3: ['4', '5', '6', '-,subtract'],
    group4: ['1', '2', '3', '+,add'],
    group5: ['0', '.,point', '=,equals to'],
  };
  const keys = [0, 1, 2, 3, 4];
  return (
    <div className="groups">
      { Object.keys(groups).map((group, i) => (
        <div key={keys[i]} className={`group ${group}`}>
          {groups[group]
            .map((name, j) => {
              let title;
              let buttonName = name;
              if (name.includes(',')) {
                [buttonName, title] = name.split(',');
              }
              return (
                <Button
                  clickHandler={handleClick(props)}
                  key={keys[j]}
                  name={buttonName}
                  title={title}
                />
              );
            })}
        </div>
      )) }
    </div>
  );
};

export default ButtonPanel;
