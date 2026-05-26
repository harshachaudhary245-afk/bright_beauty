import type { Money } from "./placeholder-data";

export const formatMoney = (m: Money) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: m.currencyCode,
    maximumFractionDigits: 0,
  }).format(m.amount);
