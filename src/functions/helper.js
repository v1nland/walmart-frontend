export function currencyFormat(num) {
	if (num < 0) {
		num = Math.abs(num);
		return "- $" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	} else {
		return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	}
}