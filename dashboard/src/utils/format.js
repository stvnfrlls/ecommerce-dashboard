const currency = new Intl.NumberFormat('en-GB', {
  style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2,
})
const compactCurrency = new Intl.NumberFormat('en-GB', {
  style: 'currency', currency: 'GBP', notation: 'compact', maximumFractionDigits: 2,
})
const number = new Intl.NumberFormat('en-GB')

export const formatCurrency = value => currency.format(value)
export const formatCompactCurrency = value => compactCurrency.format(value)
export const formatNumber = value => number.format(value)
export const formatProductName = value => value.trim().toLowerCase().replace(/\b[a-z]/g, letter => letter.toUpperCase())
