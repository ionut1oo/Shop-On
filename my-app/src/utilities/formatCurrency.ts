const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "RON",
    style: "currency",
  });
  
  const formatCurrency = (number: number): string => {
    return CURRENCY_FORMATTER.format(number);
  };
  
  export { CURRENCY_FORMATTER, formatCurrency };
  