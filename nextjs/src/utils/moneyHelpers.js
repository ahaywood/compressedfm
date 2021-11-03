export const formatMoney = (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(amount);
};

export const removeDoubleZeros = (amount) => amount.replace(/\.00$/, '');
