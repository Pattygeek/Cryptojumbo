export const formatAmount = (amount: number, currency?: 'NGN' | 'USD'): string => {
  const initializeCurrency = currency || 'USD';
  const currencySymbol: any = {
    NGN: {
      locale: 'en-NG',
      currency: 'NGN',
    },
    USD: {
      local: 'en-US',
      currency: 'USD',
    },
  };
  const formatter: string = new Intl.NumberFormat(
    currencySymbol[initializeCurrency].locale,
    {
      style: 'currency',
      currency: currencySymbol[initializeCurrency].currency,
    },
  ).format(amount);
  return formatter;
};

export const formatDate = (timestamp: string): string => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
  return formatter;
};
