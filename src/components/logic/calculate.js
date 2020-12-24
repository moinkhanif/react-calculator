const calculate = (calculatorData, buttonName) => {
  let { total } = calculatorData;
  const { next, operation } = calculatorData;
  if (buttonName === '+/-') {
    total *= -1;
  }
  return { total, next, operation };
};

export default calculate;
