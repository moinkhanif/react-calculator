import operate from './operate';

const OPERATIONS = ['+', '-', 'X', '÷', '%'];

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  const name = parseFloat(buttonName, 10);

  if (name || name === 0) {
    if (operation && operation !== '%' && operation !== '=') {
      if (!next) {
        next = `${name}`;
      } else {
        next += `${name}`;
      }
    } else if (!total) {
      total = `${name}`;
    } else if (operation === '=') {
      total = `${name}`;
      operation = null;
    } else {
      total += `${name}`;
      if (total.indexOf('.') === -1) {
        total = parseFloat(total);
        total = `${total}`;
      }
    }
  }

  if (buttonName === '=' && operation && next) {
    if (total === null) {
      total = '0';
    }
    total = operate(total, next, operation);
    next = null;
    operation = '=';
  }

  switch (buttonName) {
    case '+/-':
      if (!total) {
        total = 0;
      }
      if (next) {
        next = parseFloat(next, 10);
        next *= -1;
        next = Object.is(next, -0) ? '-0' : `${next}`;
      } else {
        total = parseFloat(total, 10);
        total *= -1;
        total = Object.is(total, -0) ? '-0' : `${total}`;
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '.':
      if (operation && operation !== '%') {
        if (!next) {
          next = '0';
          if (operation === '=') {
            operation = null;
          }
        } if (next % 1 === 0) {
          next += '.';
        }
      } else if (!total) {
        total = '0.';
      } else if (total % 1 === 0 && !total.includes('.')) {
        total += '.';
      }
      break;
    default:
      break;
  }

  if (OPERATIONS.includes(buttonName)) {
    if (buttonName === '%') {
      if (total && operation && next) {
        total = operate(total, next, operation);
        next = null;
      } else if (total === null) {
        total = '0';
      }
      operation = '%';
      total = operate(total, next, operation);
    }
    if (total.includes('Error')) {
      total = '0';
    }
    if (total.charAt(total.length - 1) === '.') {
      total += '0';
    }
    operation = buttonName;
  }
  const newData = { total, next, operation };
  return newData;
};

export default calculate;
