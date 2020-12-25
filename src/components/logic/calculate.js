import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next } = calculatorData;
  const { operation } = calculatorData;
  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else {
    total = operate(total, next, buttonName);
  }
  return { total, next, operation };
};

export default calculate;
