

const formatValue = (value: number): string =>
  new Intl.NumberFormat('de-DE').format(value);

export default formatValue;
