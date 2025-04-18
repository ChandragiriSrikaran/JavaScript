// This code formats a number as a currency string using the toLocaleString method.
// It takes an amount and a currency code as input and returns the formatted string.
let amount=123456789.6789;
let currency='JPY';
console.log(formatCurrency(amount, currency));
function formatCurrency(amount, currency) {
    return amount.toLocaleString('en-'+currency.slice(0,currency.length-1), {
        style: 'currency',
        currency: currency,
    });
}

