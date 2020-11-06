export function currencyFormat(num) {
  if (num < 0) {
    num = Math.abs(num);
    return "- $" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  } else {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
}

export function isParseable(str) {
  if (typeof str !== "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
