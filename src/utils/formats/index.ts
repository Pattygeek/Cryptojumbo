export const formatAmount = (amount: number): string => {
  const formatter: string = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
  return formatter;
};
