export const NO_VALUE = "-";

export const formatCurrency = (
  value: number,
  { locales = "en-US", precision = 0, currency = "USD" } = {},
) => {
  if (isNaN(value)) return NO_VALUE;

  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
  }).format(value);
};

export const formatPercentage = (value: number, precision: number = 0) => {
  if (isNaN(value)) return NO_VALUE;

  return new Intl.NumberFormat("en-US", {
    style: "percent",

    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
    signDisplay: "exceptZero",
  }).format(value / 100);
};
