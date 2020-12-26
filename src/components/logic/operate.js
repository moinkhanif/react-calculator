import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = new Big(parseFloat(numberOne, 10));
  const two = numberTwo ? new Big(parseFloat(numberTwo, 10)) : null;

  let result;
  switch (operation) {
    case '+':
      result = one.add(two).toFixed(4);
      break;
    case '-':
      result = one.sub(two).toFixed(4);
      break;
    case 'X':
      result = one.mul(two).toFixed(4);
      break;
    case '÷':
      result = one.div(two).toFixed(4);
      break;
    case '%':
      result = one.div(100).toFixed(4);
      break;
    default:
      break;
  }
  return `${parseFloat(result)}`;
};

export default operate;
