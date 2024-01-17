function calculateTotalSalesWithTax(array, tax) {
  let total;
  total = array.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return calculateTax(total, tax);
}

function calculateTax(price, tax) {
  let total = price + (price * tax) / 100;
  return parseFloat(total.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
