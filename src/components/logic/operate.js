import Big from 'big.js';

const parseResult = result => `${parseFloat(result)}`;

const operate = (numberOne, numberTwo, operation) => {
  const one = (parseFloat(numberOne)) || parseFloat(numberOne) === 0
    ? new Big(parseFloat(numberOne, 10)) : null;
  const two = numberTwo ? new Big(parseFloat(numberTwo, 10)) : null;

  let result;
  if (one || one === 0) {
    switch (operation) {
      case '+':
        result = parseResult(one.add(two).toFixed(4));
        break;
      case '-':
        result = parseResult(one.sub(two).toFixed(4));
        break;
      case 'X':
        result = parseResult(one.mul(two).toFixed(4));
        break;
      case '÷':
        if (two.toFixed(4) === '0.0000') {
          result = 'Error: Cannot divide by 0';
        } else {
          result = parseResult(one.div(two).toFixed(4));
        }
        break;
      case '%':
        result = parseResult(one.div(100).toFixed(4));
        break;
      default:
        break;
    }
  } else {
    result = 'Error: Unable to calculate result';
  }
  return result;
};

export default operate;
