export const numberWithCommas = (numberToFormat) => numberToFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
