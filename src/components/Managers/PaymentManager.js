import Dinero from 'dinero.js';

export const getDollarFormat = (itemAmount) => {
  const obj = { amount: itemAmount };
  return Dinero(obj).toFormat('$0.00');
}

export const getSubtotal = (...args) => {
  return Dinero({ amount: args[0] }).add(Dinero({ amount: args[1] })).add(Dinero({ amount: args[2] })).getAmount();
}

export const getTaxAmount = (subtotal) => {
  let obj = { amount: subtotal};
  let subtotalAndDeliveryTotal = Dinero(obj).add(Dinero({ amount: 150 })).getAmount();
  let taxAmountToFormat = { amount: subtotalAndDeliveryTotal };
  let amountToBeTaxed =  Dinero(taxAmountToFormat).toFormat('0.00');
  return Number(amountToBeTaxed * .0875).toFixed(2);
}

export const getTotalAmount = (subtotal) => {
  const taxAmount = getTaxAmount(Number(subtotal));
  const subtotalAmount = { amount: Number(subtotal) };
  const subtotalAndDelivery = Dinero({ amount: 150 }).add(Dinero(subtotalAmount)).getAmount();
  // Format number for calculation
  const total = Number(Dinero({ amount: Number(subtotalAndDelivery) }).toUnit());
  const totalWithTax = Number(total) + Number(taxAmount);
  return totalWithTax.toFixed(2);
}
