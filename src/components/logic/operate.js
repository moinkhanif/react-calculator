import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = new Big(numberOne);
  const two = new Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = one.add(two);
      break;
    case '-':
      result = one.sub(two);
      break;
    case 'X':
      result = one.mul(two);
      break;
    case '÷':
      result = one.div(two);
      break;
    case '%':
      result = one.mod(two);
      break;
    default:
      break;
  }
  return result;
};

export default operate;
