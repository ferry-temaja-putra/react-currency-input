import currency from "currency.js";

export function formatCurrency(value) {
  let options = { pattern: `! #` };
  if (currency(value).cents() === 0) {
    options = { ...options, ...{ precision: 0 } };
  }

  return currency(value, options).format();
}

export function parseCurrency(value) {
  return currency(value).value;
}
